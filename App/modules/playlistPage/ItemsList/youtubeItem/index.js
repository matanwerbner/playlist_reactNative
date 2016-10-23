import React from 'react';
import styles from './item.style';
import { View, Text } from 'react-native'
export default ({track, isActive}) => {
    return (
        <View style={ styles.textContainer}>
            <Text style={ isActive ? styles.activeItem : styles.item }>{ track.snippet.title }</Text>
        </View>
    )
}