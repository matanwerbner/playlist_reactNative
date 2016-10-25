import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  ScrollView,
  View,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './postTrack.styles';
import PlIconButton from '../../Components/PlIconButton';
import PlTrackPlayer from '../../Components/PlTrackPlayer'
import formatYoutubeData from '../../Utils/formatYoutubeData';
import GroupSelect from './groupSelect';
import {connect} from 'react-redux';
import PostTrackActions from '../../Redux/postTrackRedux';
import PlButton from '../../Components/PlButton';
class _PostTrack extends Component {

  constructor(props) {
    super(props);
    this._onSelect = this
      ._onSelect
      .bind(this);
    
    this._doPost = this._doPost.bind(this);
    this.state = {
      showPlayer: false,
      selectedGroups: []
    }
  }

  componentWillReceiveProps(newProps) {
    if(newProps.finishedPostingTrack) {
      Actions.pop();
    }
  }

  componentDidMount() {
    this
      .props
      .fetchGroupsRequest();
  }

  _onSelect(item) {
    const {selectedGroups} = this.state;
    const {id} = item.group;
    const itemIndex = selectedGroups.indexOf(id);
    const newGroups = itemIndex > -1
      ? selectedGroups.filter((s) => s != id)
      : [id, ...selectedGroups]
    this.setState(Object.assign({}, this.state, {selectedGroups: newGroups}))
  }

  _doPost() {
    this.props.postTrackRequest(
      this.props.track,
      this.state.selectedGroups
    );
  }

  render() {
    const youtubeData = formatYoutubeData(this.props.track);
    const _groups = this.props.groups && this
      .props
      .groups
      .map((group) => ({
        group,
        selected: this
          .state
          .selectedGroups
          .indexOf(group.id) > -1
      }));
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header.container}>
          <Text style={styles.header.text}>
            {youtubeData.title}
          </Text>
        </View>
        <View style={styles.body.container}>
          <Image
            style={styles.body.thumbnail}
            source={{
            uri: youtubeData.thumbnailUrl
          }}/>
          {this.state.showPlayer && <PlTrackPlayer autoplay={false} item={track}/>}
          {_groups && 
            <View
              style={ styles.groupsContainer } >
            <GroupSelect 
              items={_groups}
              onSelect={this._onSelect}/>
              </View>
            }
        </View>
        <View style={styles.footer.container}>
          <View style={styles.footer.btnsContainer}>

            <PlButton onPress={ Actions.pop}>
              CANCEL
            </PlButton>
            <PlButton onPress={ this._doPost} type="success">
              POST
            </PlButton>
          </View>

        </View>
      </View>
    );
  }
}

const mapStateToProps = ({postTrack}) => {
  return { 
    groups: postTrack.groups,
    finishedPostingTrack: postTrack.finishedPostingTrack
  }
}

export default connect(mapStateToProps, PostTrackActions)(_PostTrack);