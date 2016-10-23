import React from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View} from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import {Actions} from 'react-native-router-flux'
import homeActions from '../../../Redux/homeRedux';
import RecentContainer from './recentContainer';
// Styles
import styles from './home.style';

// I18n
import I18n from 'react-native-i18n'

class RecentActivity extends React.Component {

  constructor(props) {
    super(props);
    this._onFilterChanged = this
      ._onFilterChanged
      .bind(this);
      this._onItemClicked = this._onItemClicked.bind(this);
  }

  componentDidMount() {
    this
      .props
      .getPlaylists();
  }

  _onItemClicked(item) {
    const { group } = item;
    Actions.playlist({groupId: group.id, trackId: item.id, groupName: group.name});
  }

  _onFilterChanged(newFilter) {}

  render() {
    const {recentActivity, filter, search} = this.props;
    return (
      <ScrollView>
        <RecentContainer
          onItemClicked={ this._onItemClicked }
          items={recentActivity}
          filter={filter}
          onFilterChanged={this._onFilterChanged}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({homePage}) => {
  return {recentActivity: homePage.recentActivity, filter: homePage.filter}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlaylists: () => dispatch(homeActions.playlistsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentActivity)
