import PlText from '../../../../Components/PlText';
import React from 'react'
import styles from './PlListItem.style';
import {View, Image} from 'react-native';
import I18n from 'react-native-i18n'

export default({item}) => {
    return <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
            <PlText style={ styles.genreText }>{ `${I18n.t(item.genre.name)}` }</PlText>
            <PlText>{item.name}</PlText>
            <View style={styles.viewsContainer}>
                <PlText>{`${I18n.t('PlListItem.views')}:${item.views}`}</PlText>
                <PlText>{`${I18n.t('PlListItem.grade')}:${item.grade}`}</PlText>
            </View>
        </View>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{
                uri: item.thumbnailUrl
            }}/>
        </View>
    </View>
}