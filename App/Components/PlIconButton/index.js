import React from 'react';
import PlButton from '../PlButton'
import PlText from '../PlText'
import {View} from 'react-native'
import styles from './PlIconButton.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DEFAULT_ICON_SIZE = 20;
export default({
    onPress,
    style,
    textStyle,
    iconStyle,
    size = DEFAULT_ICON_SIZE,
    name,
    children,
    text,
    disabled = false
}) => {

    const _btnStyle = {
        ...styles.btnStyle,
        ...style,
        ...(disabled
            ? styles.btnDisabled
            : {})
    }
    return (
            <PlButton
                disabled={disabled}
                onPress={onPress}
                btnStyle={_btnStyle}
                textStyle={{
                ...styles.textStyle,
                ...textStyle
            }}>
                <Icon
                    size={size}
                    name={name}
                    style={{
                    ...iconStyle,
                    ...styles.iconStyle
                }}/> 
            </PlButton>
    )

}