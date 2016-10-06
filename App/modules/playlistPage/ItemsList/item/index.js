import React from 'react';
import styles from './item.style';
import { View, Text } from 'react-native'
export default ({data, isActive}) => {
    return (
        <View style={ styles.textContainer}>
            <Text style={ isActive ? styles.activeItem : styles.item }>{ data.name }</Text>
        </View>
    )
}