import PlText from '../../../../../Components/PlText';
import React from 'react'
import styles from './recentActivityItem.style';
import {View, Image, TouchableHighlight} from 'react-native';
import I18n from 'react-native-i18n'
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default({item, onPress}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <PlText style={styles.userName}>
                    {`${item.user.name}: `}</PlText>
                <PlText style={styles.trackTitle}>{item.track.title}</PlText>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                    uri: item.track.thumbnail
                }}/>
                <View style={ styles.playArrowContainer}>
                <Icon style={styles.playArrow} size={ 35 } name="play-arrow"/>
                </View>
            </View>

            <View style={styles.subTitleContainer}>
                <Icon style={styles.arrowIcon} name="arrow-forward"/>
                <PlText style={styles.groupName}>{item.group.name}</PlText>
            </View>
        </View>
    )
}