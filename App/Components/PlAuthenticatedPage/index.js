import React, {Component} from 'react'
import {connect} from 'react-redux';
import PlSpinner from '../PlSpinner';
import LoggedInUserActions from '../../Redux/loggedInUserRedux'
import {Actions} from 'react-native-router-flux';
import {View} from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');

class _AuthenticatedComponent extends Component {
    constructor(props) {
        super(props);
        this._loginSuccess = this._loginSuccess.bind(this);
    }

    componentWillMount() {
        this.props.loginRequest()
    }

    _loginSuccess(data) {
        this.props.loginSuccess(data.profile, data.credentials);
    }

    render() {
        const {profile, credentials, fetching, userNotFound} = this.props;
         if (fetching) {
            return <PlSpinner />
        }
        if(userNotFound) {
            return <FBLogin
            permissions={["email", "user_friends"]}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            onLogin={ this._loginSuccess}/>
        }
        return this.props.children;
    }
}

const mapStateToProps = ({loggedInUser}) => ({profile: loggedInUser.profile, credentials: loggedInUser.credentials, userNotFound: loggedInUser.userNotFound, fetching: loggedInUser.fetching})

export default connect(mapStateToProps, LoggedInUserActions)(_AuthenticatedComponent);
