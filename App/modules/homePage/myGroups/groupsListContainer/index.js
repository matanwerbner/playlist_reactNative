import React from 'react';
import {View, Text} from 'react-native';
import PlList from '../../../../Components/PlList';
import PlText from '../../../../Components/PlText';
import GroupItem from './groupItem';
import CreateGroup from './createGroup';
import styles from './groupListContainer.styles';
import { Actions } from 'react-native-router-flux';
export default({myGroups, onGroupClicked}) => {

    const _renderRow = (item) => <GroupItem item={item} key={item.id}/>
    const _onCreateGroup = () => {
        Actions.createGroup();
    }
    return (
        <View style={{ flex: 1}}>
            <View style={ styles.titleContainer}>
                <CreateGroup onPress={_onCreateGroup}/>
            </View>
            <View>
                <PlList items={myGroups} 
                renderRow={_renderRow} 
                onPress={onGroupClicked}/>
            </View>
        </View>
    )
}