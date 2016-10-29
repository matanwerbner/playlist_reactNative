import PlText from '../../../../../../Components/PlText';
import React from 'react';
import styles from './youtubeItem.style';
import {View, Image, TouchableHighlight} from 'react-native';
import I18n from 'react-native-i18n'
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default({item, onPress}) => {
    const {user, group} = item;
    const {snippet} = item.data.track;
    return (
        <View style={styles.itemContainer}>
            <Image
                style={styles.image}
                source={{
                uri: snippet.thumbnails.default.url
            }}/>
            <View style={styles.textContainer}> 
                <PlText containerStyle={{ flex: 1 }} style={styles.trackTitle}>{snippet.title}</PlText>
                <PlText  style={styles.groupName}>{item.group.name}</PlText>
           </View>
            <View style={ styles.statsContainer}>
                <View style={ styles.statContainer}>
                <Icon size={15} name="play-arrow" style={ styles.statsIcon} />
                <PlText style={ styles.statText }>50</PlText>
                </View>
                <View style={ styles.statContainer}>
                <Icon size={15} name="grade" style={ styles.statsIcon} />
                <PlText style={ styles.statText }>50</PlText>
                </View>
            </View>
        </View>
    )
}