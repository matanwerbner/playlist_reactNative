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

class Home extends React.Component {

  constructor(props) {
    super(props);
    this._onFilterChanged = this._onFilterChanged.bind(this);
  }

  componentDidMount() {
    this.props.getPlaylists();
  }

  _onFilterChanged(newFilter) {
    debugger;
  }

  render () {
    const {playlists, filter, search} = this.props;
    return (
      <View style={styles.mainContainer}>
          <PlListContainer items={playlists} 
                           search={search}
                           onFilterChanged={this._onFilterChanged}   />
      </View>
    )
  }
}

const mapStateToProps = ({ homePage }) => {
  return {
     playlists: homePage.playlists,
     search: homePage.search 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlaylists: () => dispatch(homeActions.playlistsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
