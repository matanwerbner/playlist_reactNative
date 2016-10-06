import React from 'react';
import Item from './item';
import { ListView } from 'react-native'
import styles from './itemsList.style'
export default ({items, activeItem}) => {
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    const dataSource = ds.cloneWithRows(items);
    const _renderRow = (item) => <Item data={ item }
                    isActive={ item == activeItem } 
                />;

    return (
        <ListView
                dataSource={dataSource}
                renderRow={_renderRow}
                contentContainerStyle={styles.itemsList }/>
       
    )
}