import React from 'react'
import {TouchableOpacity} from 'react-native'
import styles from './Styles/NavItemsStyle'
import {Actions as NavigationActions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Colors, Metrics} from '../Themes'

const openDrawer = () => {
  NavigationActions.refresh({key: 'drawer', open: true})
}

export default {
  backButton() {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon
          name='angle-left'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}/>
      </TouchableOpacity>
    )
  },

  hamburgerButton() {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Icon
          name='bars'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}/>
      </TouchableOpacity>
    )
  },

  searchButton() {
      return (
        <TouchableOpacity onPress={this}>
          <Icon
            name='search'
            size={Metrics.icons.small}
            color={Colors.snow}
            style={styles.navButtonLeft}/>
        </TouchableOpacity>
      );
  }

}