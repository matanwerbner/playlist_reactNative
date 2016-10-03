import React from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View} from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import {Actions as NavigationActions} from 'react-native-router-flux'
import PlActions from '../../Redux/playlistRedux';
import styles from './playlist.style';
import YouTube from './youtubeComponent'
// I18n
import I18n from 'react-native-i18n'

class Playlist extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this
      .props
      .fetchPlaylist(1);
  }

  render() {
    const {playlist} = this.props;
    return (
      <View style={styles.mainContainer}>
        <YouTube/>
      </View>
    )
  }
}

const mapStateToProps = ({playlistPage}) => {
  return {playlist: playlistPage.playlist}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (PlId) => dispatch(PlActions.playlistRequest(PlId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
