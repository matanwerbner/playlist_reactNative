import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Image} from 'react-native';
import styles from './postTrack.styles';
import PlIconButton from '../../../Components/PlIconButton';
import PlTrackPlayer from '../../../Components/PlTrackPlayer'
class _PostTrackModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {onClose, modalContext} = this.props;
    const {title, thumbnail} = modalContext.track;

    return (
      <View style={styles.modalContainer}>
        <Modal animationType={"slide"} transparent={false} onRequestClose={onClose}>
          <View style={styles.modalContent}>
            <View style={styles.header.container}>
              <Text style={styles.header.text}>
                POST YOUR TRACK
              </Text>

              <PlIconButton onPress={onClose} name="close"/>

            </View>
            <View style={styles.body.container}>
              <Text style={styles.body.header}>{title}</Text>
              <PlTrackPlayer item={modalContext.track}/>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default _PostTrackModal;