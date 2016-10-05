import React from 'react'
import styles from './PlListSearch.style';
import PlSearch from '../../../../Components/PlSearch';
import {View, Image} from 'react-native';
import I18n from 'react-native-i18n'

export default () => {
    const _onValueChanged = () => {
        debugger;
    }
    const items = [{label: 'hi', value: '2'},{label: 'hi3', value: '3'}]
    return <View style={ styles.searchContainer}>
        <PlSearch onChange={_onValueChanged}>
        Hi!
        </PlSearch>
    </View>
}