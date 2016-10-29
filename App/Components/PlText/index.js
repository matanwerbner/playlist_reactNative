import React from 'react'
import styles from './PlText.style';
import {Text, View} from 'native-base';
export default({children, style, placeholder, containerStyle}) => {
    return (
        <View style={ containerStyle }>
            <Text
                placeholder={placeholder}
                style={Object.assign({}, styles.textStyle, style)}>
                {children}
            </Text>
        </View>
    )

}