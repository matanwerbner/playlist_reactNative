import React from 'react'
import PlText from '../../../../../Components/PlText'
import {View, Image} from 'react-native'
import styles from './groupItem.style'
import PlIcon from '../../../../../Components/PlIcon';
import PlIconButton from '../../../../../Components/PlIconButton';
var moment = require('moment');

export default({item, isEditable, onEditGroup, onShareGroup}) => {
    const administrator = item
        .members
        .find((m) => m.role == 'administrator');
    const members = item
        .members
        .filter((m) => m.role != 'administrator');

    const timeString = moment(item.lastUpdated).fromNow();
    return (
        <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
                <View style={styles.title.container}>

                    <View style={styles.title.groupNameContainer}>
                        <PlText style={styles.title.groupName}>
                            {`${item.name} `}
                        </PlText>

                    </View>
                <PlIcon name="update" size={10} text={timeString}/>

                <View style={styles.members.container}>
                    <PlText style={styles.members.admin}>
                        {administrator.name},
                    </PlText>
                    {members.map((m) => <PlText key={m.id} style={styles.members.member}>{m.name},</PlText>)}

                </View>
            </View>
        </View>

                {
                    isEditable && 
                    (
                    <View style={ styles.groupAdmin.container}>
                        <PlIconButton
                            style={styles.groupAdmin.editBtn}
                            onPress={() => onEditGroup(item)}
                            iconStyle={styles.groupAdmin.editIcon}
                            name="edit"
                            size={20}/>
                        <PlIconButton
                            style={styles.groupAdmin.editBtn}
                            onPress={() => onShareGroup(item)}
                            iconStyle={styles.groupAdmin.editIcon}
                            name="person-add"
                            size={20}/>
                    </View>
                    )
                }
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