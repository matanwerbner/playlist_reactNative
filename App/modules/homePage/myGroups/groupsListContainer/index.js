import React from 'react';
import {View, Text} from 'react-native';
import PlList from '../../../../Components/PlList';
import PlText from '../../../../Components/PlText';
import GroupItem from './groupItem';
import styles from './groupListContainer.styles';
import { Actions } from 'react-native-router-flux';
export default({myGroups, onGroupClicked, loggedInUserId, onEditGroup}) => {

    const _renderRow = (item) => 
        <GroupItem item={item} 
          isEditable={ loggedInUserId == item.adminUserId } 
          key={item.id}
          onEditGroup={onEditGroup}/>
    const _onCreateGroup = () => {
       // Actions.createGroup();
    }
    return (
            <View>
                <PlList items={myGroups} 
                renderRow={_renderRow} 
                onPress={onGroupClicked}/>
            </View>
    )
}