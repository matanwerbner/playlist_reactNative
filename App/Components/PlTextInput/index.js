import React from 'react'
import { TextInput } from 'react-native';
import styles from './PlTextInput.styles';

export default({value, onChange, placeholder, style}) => {
    const _style = Object.assign({}, styles.txtStyle, style);
    return (<TextInput
        placeholder={placeholder}
        style={_style}
        onChangeText={onChange}
        value={value}/>)
}