import React from 'react';
import {ScrollView, Text, View} from 'react-native'
import {connect} from 'react-redux'
import myGroupsActions from '../../../Redux/myGroupsRedux';
import PlList from '../../../Components/PlList'
import {Actions} from 'react-native-router-flux'
import GroupListContainer from './groupsListContainer';
class MyGroups extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this
            .props
            .fetchMyGroupsRequest();
    }

    _onGroupClicked(group) {
        Actions.playlist({groupId: group.id, groupName: group.name});
    }

    render() {
        const {myGroups} = this.props;
        if (!myGroups) {
            return <View/>
        }
        return (
            <ScrollView>
            <GroupListContainer
            onGroupClicked={this._onGroupClicked}
            myGroups={myGroups}/>
            </ScrollView>)
    }
}

const mapStateToThis = ({myGroups}) => {
    return {myGroups: myGroups.data}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyGroupsRequest: () => dispatch(myGroupsActions.fetchMyGroupsRequest())

    }
}

export default connect(mapStateToThis, mapDispatchToProps)(MyGroups);