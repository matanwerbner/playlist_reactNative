import React from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View} from 'react-native'
import ItemsList from './ItemsList';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import {Actions as NavigationActions} from 'react-native-router-flux'
import PlActions from '../../Redux/playlistRedux';
import styles from './playlist.style';
import {Actions} from 'react-native-router-flux'
// I18n
import {find} from 'lodash'
import I18n from 'react-native-i18n'
import PlTrackPlayer from '../../Components/PlTrackPlayer'
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
    this._loadVideo = this
      ._loadVideo
      .bind(this);
    this._onError = this
      ._onError
      .bind(this);
    this.state = {
      activeItem: null,
      error: null
    }
  }

  componentDidMount() {
    this
      .props
      .fetchPlaylist(this.props.groupId);
  }

  _loadVideo(activeItem) {
    this.setState({activeItem});
  }

  componentWillReceiveProps({playlist, trackId}) {
    if (!_.isNil(playlist)) {
      const itemToPlay = _.isNil(trackId)
        ? playlist.items[0]
        : find(playlist.items, {id: trackId})
      this._loadVideo(itemToPlay);
    }
  }

  _onError(error) {
    this.setState(Object.assign({}, this.state, {
      error: JSON.stringify(error.error)
    }));
  }

  _onNext() {
    const {playlist} = this.props;
    debugger;
    const currentItemIdx = _.findIndex(playlist.items, (i) => i.id == this.state.activeItem.id);
    this._loadVideo(playlist.items[currentItemIdx + 1])
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (!_.isEqual(this.state.activeItem, nextState.activeItem));
  }

  componentWillUnmount() {
    this
      .props
      .resetPlaylist();
  }

  render() {
    const {playlist} = this.props;
    const _onItemPressed = (item) => {
      this._loadVideo(item.track);
    }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.videoContainer}>
          {this.state.activeItem && 
            <PlTrackPlayer
            item={this.state.activeItem.track}
            onError={this._onError}
            onNext={this._onNext}/>}
        </View>
        {this.state.error && <Text>{this.state.error}</Text>}
        <View style={styles.itemsContainer}>
          {playlist && <ItemsList
            items={playlist.items}
            onPress={_onItemPressed}
            activeItem={this.state.activeItem}/>
}
        </View>
      </View>
    )
  }
}
const mapStateToProps = ({playlistPage}) => {
  return {playlist: playlistPage.playlist}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (PlId) => dispatch(PlActions.playlistRequest(PlId)),
    resetPlaylist: () => dispatch(PlActions.resetPlaylist())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)