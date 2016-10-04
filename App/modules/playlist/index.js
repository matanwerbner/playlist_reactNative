import React from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View} from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import {Actions as NavigationActions} from 'react-native-router-flux'
import PlActions from '../../Redux/playlistRedux';
import styles from './playlist.style';
import YouTube from 'react-native-youtube';
// I18n
import I18n from 'react-native-i18n'

class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this._onError = this._onError.bind(this);
  }

  componentDidMount() {
    this
      .props
      .fetchPlaylist(1);
  }

  shouldComponentUpdate() {
    return false;
  }

  _onError(error) {
    debugger;
  }

  render() {
    const {playlist} = this.props;
    return (
      <View style={styles.mainContainer}>
        <YouTube ref="youtubePlayer" videoId="MavcnygzmFI" // The YouTube video ID
          play={true} // control playback of video with true/false
          playsInline={true} // control whether the video should play inline
          apiKey="AIzaSyAf9kPR8KvRmdNZ4kUZ5BDQJdEhGhs964Y"
          onError={(e)=>{this._onError(e)}}
          style={{width: 300, height: 200, alignSelf: 'center' }}
        />
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
