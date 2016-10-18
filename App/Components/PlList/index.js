import React from 'react'
import {ListView, View, TouchableHighlight} from 'react-native';
import styles from './PlList.styles';

export default({items, renderRow, onPress}) => {
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    const dataSource = ds.cloneWithRows(items);

    const _renderSepeartor = (sectionID,rowID) => {
        return <View key={"sectionID_"+sectionID+"_rowID_"+rowID} style={ styles.seperator} />
    }

    const _renderRow = (item) => {
        return (
            <TouchableHighlight style={ styles.listItem} onPress={ () => onPress(item)}>
                <View>
                { renderRow(item) }
                </View>
            </TouchableHighlight>
        )
    }

    return <ListView
        renderSeparator={_renderSepeartor}
        dataSource={dataSource}
        renderRow={_renderRow}
        contentContainerStyle={styles.listViewStyle}/>
}