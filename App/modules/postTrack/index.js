import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Image} from 'react-native';
import styles from './postTrack.styles';
import PlIconButton from '../../Components/PlIconButton';
import PlTrackPlayer from '../../Components/PlTrackPlayer'
import formatYoutubeData from '../../Utils/formatYoutubeData';
class _PostTrackModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPlayer: false
    }
  }

  render() {
    const youtubeData = formatYoutubeData(this.props.track);

    return (
      <View style={styles.mainContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header.container}>
              <Text style={styles.header.text}>
                {youtubeData.title}
              </Text>
            </View>
            <View style={styles.body.container}>
              <Image 
                style={{width: 320, height: 150}}
                source={{uri: youtubeData.thumbnailUrl }} />
                {
                  this.state.showPlayer && 
                   <PlTrackPlayer autoplay={false} item={track}/>
                }
            </View>
          </View>
      </View>
    );
  }
}

export default _PostTrackModal;