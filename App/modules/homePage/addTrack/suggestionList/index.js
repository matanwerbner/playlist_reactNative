import React from 'react'
import PlList from '../../../../Components/PlList';
import { View, Text, Image } from 'react-native';
import styles from './suggestionList.style';
import {Actions} from 'react-native-router-flux'
import formatYoutubeData from '../../../../Utils/formatYoutubeData'
export default({items, onTrackSelected}) => {

    const _renderRow = (item) => {
        const youtubeData = formatYoutubeData(item);
        return <View style={ styles.suggestionContainer}>
            <Image 
                style={{width: 50, height: 50}}
                source={{uri: youtubeData.thumbnailUrl }} />
            <Text style={ styles.suggestionText}>{youtubeData.title}</Text>
        </View>
    }
    return (
        <PlList items={items} 
        onPress={onTrackSelected} 
        renderRow={_renderRow}/>
    )
}