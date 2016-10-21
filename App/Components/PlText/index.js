import React from 'react'
import styles from './PlText.style';
import { Text } from 'native-base';
export default ({children, style, placeholder}) => {
    return <Text placeholder={ placeholder } style={ Object.assign({}, styles.textStyle, style) }>
        { children }
    </Text>
}