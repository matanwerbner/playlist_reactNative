import React from 'react';
import {View, Text} from 'react-native';
import PlList from '../../../../Components/PlList';
import GroupItem from './groupItem';
import CreateGroup from './createGroup';
export default({myGroups, onGroupClicked}) => {
    
    const _renderRow = (item) => <GroupItem item={item} key={item.id} />

    return (
        <View>
            <CreateGroup onPress={ () => {} } />
            <PlList items={myGroups} renderRow={_renderRow} onPress={onGroupClicked}/>
        </View>
    )
}