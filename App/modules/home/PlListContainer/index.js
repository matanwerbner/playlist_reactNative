import React from 'react'
import {ScrollView, Text, ListView, View} from 'react-native'
import PlListItem from './PlListItem'
import PlListSearch from './PlListSearch'
import styles from './PlListContainer.style';

export default({items, search, onFilterChanged}) => {
    if (!items) {
        return <View>
            <Text style={styles.emptyResult}>No Playlists</Text>
        </View>
    }

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    const dataSource = ds.cloneWithRows(items);
    const _renderRow = (item) => <PlListItem item={item}/>;

    return (
        <View>
            { search.enabled && <PlListSearch/> }
            <ListView
                dataSource={dataSource}
                renderRow={_renderRow}
                contentContainerStyle={styles.listViewStyle}/>
        </View>
    )
}