import React from 'react'
import {View, Icon} from 'react-native';
import PlText from '../../../../../Components/PlText';
import styles from './createGroup.style';
import PlButton from '../../../../../Components/PlButton';
export default({ onPress }) => {
    return (
        <View style={ styles.container } >
            <PlButton type="success" onPress={ onPress }>
                Create a new group
            </PlButton>
        </View>
    )
}