import React from 'react';
import Item from './item';
import PlList from '../../../Components/PlList';
import styles from './itemsList.style'
export default ({items, activeItem, onPress}) => {
    const _renderRow = (item) => 
                <Item data={ item }
                    isActive={ item == activeItem } 
                />;

    return (
        <PlList items={ items }
                onPress={ onPress}
                renderRow={_renderRow}/>
       
    )
}