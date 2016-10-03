import React from 'react'
import styles from './PlSearch.style';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default({children, onChange, style}) => {
    const _style = Object.assign({}, styles.plSearchContainer, style);
    return (
        <View style={_style}>
            <Icon name="search" 
                    style={styles.searchIcon}
                  size={ 20 }  />
            <TextInput onChangeText={onChange} 
                       value={children}
                       style={styles.textInputStyle}/>
        </View>
    )
}