import React from 'react'
import PlText from '../../../../../Components/PlText'
import { View, Image  } from 'react-native'
import styles from './groupItem.style'

export default({item}) => {
    return <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <PlText style={styles.groupName}>
                        {`${item.name} `}
                    </PlText>
                </View>
                <View style={styles.subTitleContainer}>
                 </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                    uri: item.thumbnail
                }}/>
            </View>
        </View>
}