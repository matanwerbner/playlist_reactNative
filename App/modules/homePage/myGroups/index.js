import React from 'react';
import {ScrollView, Text, View} from 'react-native'
import {connect} from 'react-redux'
import myGroupsActions from '../../../Redux/myGroupsRedux';
import PlList from '../../../Components/PlList'
import {Actions} from 'react-native-router-flux'
import GroupListContainer from './groupsListContainer';
import CreateGroup from './createGroup';
import Share, {ShareSheet, Button} from 'react-native-share';

class MyGroups extends React.Component {
    constructor() {
        super();
        this._onCreate = this
            ._onCreate
            .bind(this);
            this._onShareGroup = this._onShareGroup.bind(this);
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
        Actions.editGroup({group});

    }

    _onCreate(group) {
        this
            .props
            .createGroupRequest(this.state.createGroup.groupName);
        this.setState(Object.assign({}, this.state, {
            createGroup: {
                groupName: null,
                active: false
            }
        }));
    }

    _onShareGroup(group) {
        let shareOptions = {
        title: "Playlist Group Invitation",
        message: `Hello there, ${this.props.loggedInUser.profile.name} has invited you to join their group ${group.name}! click link to do it`,
        url: "http://playlist.co.il/join-group/" + group.id,
        subject: "Playlist Group Invitation" //  for email
        };
        Share.open(shareOptions);
    }

    render() {
        const {myGroups, loggedInUser} = this.props;
        if (!myGroups) {
            return <View/>
        }
        return (

            <ScrollView>
                <View>
                    <CreateGroup
                        onActiveChange={(val) => this.setState(Object.assign({}, this.state, {
                        createGroup: {
                            groupName: '',
                            active: val
                        }
                    }))}
                        onGroupNameChange={(val) => this.setState(Object.assign({}, this.state, {
                        createGroup: {
                            ...this.state.createGroup,
                            groupName: val
                        }
                    }))}
                        onSubmit={this._onCreate}
                        groupName={this.state.createGroup.groupName}
                        isActive={this.state.createGroup.active}
                        loggedInUserId={loggedInUser.id}/>
                </View>
                <GroupListContainer
                    onShareGroup={this._onShareGroup}
                    loggedInUserId={this.props.loggedInUser.id}
                    onGroupClicked={this._onGroupClicked}
                    myGroups={myGroups}
                    onEditGroup={this._onEditGroup}/>
            </ScrollView>
        )
    }
}

const mapStateToThis = ({myGroups, loggedInUser = {}}) => {
    return {
        myGroups: myGroups.data, loggedInUser: loggedInUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyGroupsRequest: () => dispatch(myGroupsActions.fetchMyGroupsRequest()),
        createGroupRequest: (name) => dispatch(myGroupsActions.createGroupRequest(name))

    }
}

export default connect(mapStateToThis, mapDispatchToProps)(MyGroups);