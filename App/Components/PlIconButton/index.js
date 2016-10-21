import React from 'react';
import PlButton from '../PlButton'
import styles from './PlIconButton.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DEFAULT_ICON_SIZE = 20;
export default({ 
    onPress, 
    btnStyle, 
    textStyle, 
    iconStyle,
    size = DEFAULT_ICON_SIZE, 
    name, 
    children,
    disabled = false}) => {

    const _btnStyle = { ...styles.btnStyle, 
        ...btnStyle,
        ...( disabled ? styles.btnDisabled : {})
    }
    return (
        <PlButton
            disabled={ disabled }
            onPress={ onPress }
            btnStyle={ _btnStyle }
            textStyle={{ ...styles.textStyle, ...textStyle}}>
            <Icon size={ size } 
                  name={name}
                  style={ { ...iconStyle, ...styles.iconStyle }  }/> 
            {children}
        </PlButton>
    )
}