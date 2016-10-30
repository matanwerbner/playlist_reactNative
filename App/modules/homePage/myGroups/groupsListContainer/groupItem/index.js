import React from 'react'
import PlText from '../../../../../Components/PlText'
import {View, Image} from 'react-native'
import styles from './groupItem.style'
import PlIcon from '../../../../../Components/PlIcon';
import PlIconButton from '../../../../../Components/PlIconButton';
var moment = require('moment');

export default({item, isEditable, onEditGroup}) => {
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
                            {
                                isEditable && 
                                <PlIconButton 
                                    style={ styles.title.editBtn } 
                                    onPress={ onEditGroup }
                                    iconStyle={ styles.title.editIcon }
                                    name="edit" size={20} />
                            }
                     </View>
                          <PlIcon name="update" size={10} text={timeString}/>
                  
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