import React from 'react';
import YoutubeItem from './youtubeItem';
import PlList from '../../../Components/PlList';
import styles from './itemsList.style'
export default ({items, activeItem, onPress}) => {
    const _renderRow = (item) => 
                <YoutubeItem track={ item.track }
                    isActive={ item == activeItem } 
                />;

    return (
        <PlList items={ items }
                onPress={ onPress}
                renderRow={_renderRow}/>
       
    )
}