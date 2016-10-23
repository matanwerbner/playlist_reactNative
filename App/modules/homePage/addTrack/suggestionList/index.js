import React from 'react'
import PlList from '../../../../Components/PlList';
import { View, Text, Image } from 'react-native';
import styles from './suggestionList.style';
import {Actions} from 'react-native-router-flux'
export default({items, onTrackSelected}) => {
    const _items = items.map((i) => ({
        id: i.id,
        thumbnail: i.snippet.thumbnails.medium,
        title: i.snippet.title
    }));
    const _renderRow = (item) => {
        return <View style={ styles.suggestionContainer}>
            <Image 
                style={{width: 50, height: 50}}
                source={{uri: item.thumbnail.url }} />
            <Text style={ styles.suggestionText}>{item.title}</Text>
        </View>
    }
    return (
        <PlList items={_items} 
        onPress={onTrackSelected} 
        renderRow={_renderRow}/>
    )
}