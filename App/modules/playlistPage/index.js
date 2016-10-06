import React from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View} from 'react-native'
import ItemsList from './ItemsList';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import {Actions as NavigationActions} from 'react-native-router-flux'
import PlActions from '../../Redux/playlistRedux';
import styles from './playlist.style';
// I18n
import I18n from 'react-native-i18n'
import YoutubePlayer from './youtubePlayer'
var _ = require("lodash");
class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this._onError = this
      ._onError
      .bind(this);
    this._onNext = this
      ._onNext
      .bind(this);
  }

  componentDidMount() {
    this
      .props
      .fetchPlaylist(1);
  }

  _onError(error) {
    debugger;
  }

  _onNext() {
    const {playingItemIdx, playlist, finishedPlaying, playNextItem} = this.props;
    if (playingItemIdx == playlist.items.length - 1) {
      finishedPlaying();
    } else {
      playNextItem(playingItemIdx + 1);
    }
  }

  render() {
    const {playlist, playingItemIdx} = this.props;
    if (_.isNil(playlist) || _.isNil(playingItemIdx)) {
      return <View/>
    }
    const activeItem = playlist.items[playingItemIdx];
    return (
      <View style={styles.mainContainer}>
        <YoutubePlayer
          item={activeItem}
          onError={this._onError}
          onNext={this._onNext}/>
        <View style={ styles.itemsContainer }>
          <ItemsList items={ playlist.items}
                     activeItem={activeItem}  />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({playlistPage}) => {
  return {playlist: playlistPage.playlist, playingItemIdx: playlistPage.playingItemIdx}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (PlId) => dispatch(PlActions.playlistRequest(PlId)),
    playNextItem: (idx) => dispatch(PlActions.setPlayItemRequest(idx)),
    finishedPlaying: () => dispatch(PlActions.finishedPlaying())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
