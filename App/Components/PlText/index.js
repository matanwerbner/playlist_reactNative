import React from 'react'
import styles from './PlText.style';
import { Text } from 'react-native';
export default ({children, style}) => {
    return <Text style={ Object.assign({}, styles.textStyle, style) }>{ children }</Text>
}