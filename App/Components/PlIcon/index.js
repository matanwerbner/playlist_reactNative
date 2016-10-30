import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlText from '../PlText';
import { View } from 'react-native'
import styles from './PlIcon.styles.js';
export default ({ name, size, text, textStyle, style }) => {
    return (
        <View style={ styles.container}>
        <Icon style={ style} name={name} size={size} />
        {
            text &&
            <PlText style={ Object.assign({}, { fontSize: size }, textStyle)}>{ text }</PlText>
        }
        </View>
    )
}
