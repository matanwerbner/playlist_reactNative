import React from 'react';
import {ScrollView, Text, View} from 'react-native'
import {connect} from 'react-redux'
import myGroupsActions from '../../../Redux/myGroupsRedux';
import PlList from '../../../Components/PlList'
import {Actions} from 'react-native-router-flux'
import GroupListContainer from './groupsListContainer';
import CreateGroup from './createGroup';

class MyGroups extends React.Component {
    constructor() {
        super();
        this._onCreate = this
            ._onCreate
            .bind(this);
            this.state = {
                createGroup: {
                    active: false,
                    groupName: ''
                }
            }
    }

    componentDidMount() {
        this
            .props
            .fetchMyGroupsRequest();
    }

    _onGroupClicked(group) {
        Actions.playlist({groupId: group.id, groupName: group.name});
    }

    _onEditGroup(group) {
        Actions.editGroup({groupId: group.id});
   
    }

    _onCreate(group) {
        debugger;
    }

    render() {
        const {myGroups} = this.props;
        if (!myGroups) {
            return <View/>
        }
        return (
            <View>
                <View>
                    <CreateGroup onActiveChange={(val) => 
                        this.setState(Object.assign({}, this.state, { createGroup: {groupName: '', active: val} })) 
                    }
                    onGroupNameChange={ (val) => 
                        this.setState(Object.assign({}, this.state, { createGroup: {...this.state.createGroup, groupName: val} })) 
                    }
                    onSubmit={this._onCreate}
                    groupName={this.state.createGroup.groupName}
                    isActive={this.state.createGroup.active}
                    />
                </View>
                <ScrollView>
                    <GroupListContainer 
                        loggedInUserId={this.props.loggedInUserId} 
                        onGroupClicked={this._onGroupClicked} 
                        myGroups={myGroups}
                        onEditGroup={this._onEditGroup}/>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToThis = ({myGroups, loggedInUser }) => {
    return {
        myGroups: myGroups.data,
        loggedInUserId: loggedInUser.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyGroupsRequest: () => dispatch(myGroupsActions.fetchMyGroupsRequest())

    }
}

export default connect(mapStateToThis, mapDispatchToProps)(MyGroups);