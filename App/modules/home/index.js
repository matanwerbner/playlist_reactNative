import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import homeActions from '../../Redux/homeRedux';

// Styles
import styles from './homeStyle';

// I18n
import I18n from 'react-native-i18n'

class home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPlaylists();
  }

  render () {
    const {playlists} = this.props;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section} behavior='position'>
          </View>
          { 
            playlists ?
              <View><Text>{`${playlists.length} playlists`}</Text></View> :
              <View><Text>No Playlists</Text></View>
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ home }) => {
  return {
     playlists: home.playlists 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlaylists: () => dispatch(homeActions.playlistsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
