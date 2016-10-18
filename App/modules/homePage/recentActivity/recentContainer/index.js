import React from 'react'
import {ScrollView, Text, ListView, View} from 'react-native'
import ActivityItem from './ActivityItem'
import styles from './RecentActivity.style';
import PlList from '../../../../Components/PlList';
export default({items, filter, onFilterChanged, onItemClicked}) => {
    if (!items) {
        return <View>
            <Text style={styles.emptyResult}>No Playlists</Text>
        </View>
    }

    const _renderRow = (item) => 
        <ActivityItem key={ item.id } item={item}/>;
    
    return (
        <View>
            <PlList items={ items } onPress={onItemClicked}  renderRow={_renderRow} />        
        </View>
    )
}