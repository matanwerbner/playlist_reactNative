import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import homeActions from '../../Redux/homeRedux';
import PlListContainer from './PlListContainer';
// Styles
import styles from './home.style';

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
          <PlListContainer items={playlists} />
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
