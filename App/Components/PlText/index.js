import React from 'react'
import styles from './PlText.style';
import { Text } from 'native-base';
export default ({children, style}) => {
    return <Text style={ Object.assign({}, styles.textStyle, style) }>
        { children }
    </Text>
}