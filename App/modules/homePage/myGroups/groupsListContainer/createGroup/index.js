import React from 'react'
import {View, Icon} from 'react-native';
import PlText from '../../../../../Components/PlText';
import styles from './createGroup.style';
import PlIconButton from '../../../../../Components/PlIconButton';
export default({ onPress }) => {
    return (
        <View style={ styles.container } >
            <PlIconButton size={30} name="add" onPress={ onPress }>
            </PlIconButton>
        </View>
    )
}