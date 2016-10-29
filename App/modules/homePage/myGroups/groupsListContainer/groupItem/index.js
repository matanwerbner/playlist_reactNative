import React from 'react'
import PlText from '../../../../../Components/PlText'
import {View, Image} from 'react-native'
import styles from './groupItem.style'
import PlIcon from '../../../../../Components/PlIcon';

export default({item}) => {
    const administrator = item
        .members
        .find((m) => m.role == 'administrator');
    const members = item
        .members
        .filter((m) => m.role != 'administrator');

    return (
        <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
                <View style={styles.title.container}>

                    <View style={styles.title.groupNameContainer}>
                        <PlText style={styles.title.groupName}>
                            {`${item.name} `}
                        </PlText>
                        <PlIcon name="update" size={10} text="12 hours ago"/>
                    </View>
                    <View style={styles.members.container}>
                        <PlText style={styles.members.admin}>
                            {administrator.name},
                        </PlText>
                        {members.map((m) => <PlText key={ m.id } style={styles.members.member}>{ m.name },</PlText>)}
                      
                    </View>
                </View>
            </View>
            <View style={styles.image.container}>
                <Image
                    style={styles.image.image}
                    source={{
                    uri: item.thumbnail
                }}/>
            </View>
        </View>
    )
}