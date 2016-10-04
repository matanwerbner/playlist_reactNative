import React, {Component} from 'react'
import {Scene, Router} from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import I18n from 'react-native-i18n'
import homeActions from '../Redux/homeRedux';
import {connect} from 'react-redux'
// screens identified by the router

import PlScreen from '../modules/playlist'
import HomeScreen from '../modules/home';
/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render() {
    const {toggleSearch, searchEnabled} = this.props;
    return (
      <Router>
          <Scene
            key='drawerChildrenWrapper'
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}>
            <Scene
              key='homeScreen'
              component={HomeScreen}
              title={I18n.t("homePage_title")}
              renderLeftButton={NavItems.hamburgerButton}
              renderRightButton={ NavItems.searchButton.bind(toggleSearch) } />
            <Scene
              initial
              key='PlScreen'
              component={PlScreen}
              title={I18n.t("playlistPage_title")}
              renderLeftButton={NavItems.hamburgerButton}
              />
          </Scene>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearch: () => dispatch(homeActions.toggleSearch())
  }
}

export default connect(null, mapDispatchToProps)(NavigationRouter)

// import PresentationScreen from '../Containers/PresentationScreen' import
// AllComponentsScreen from '../Containers/AllComponentsScreen' import
// UsageExamplesScreen from '../Containers/UsageExamplesScreen' import
// LoginScreen from '../Containers/LoginScreen' import ListviewExample from
// '../Containers/ListviewExample' import ListviewGridExample from
// '../Containers/ListviewGridExample' import ListviewSectionsExample from
// '../Containers/ListviewSectionsExample' import MapviewExample from
// '../Containers/MapviewExample' import APITestingScreen from
// '../Containers/APITestingScreen' import ThemeScreen from
// '../Containers/ThemeScreen' import DeviceInfoScreen from
// '../Containers/DeviceInfoScreen' <Scene key='presentationScreen'
// component={PresentationScreen} title='Ignite'
// renderLeftButton={NavItems.hamburgerButton} /> <Scene key='componentExamples'
// component={AllComponentsScreen} title='Components' /> <Scene
// key='usageExamples' component={UsageExamplesScreen} title='Usage'
// rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
// <Scene key='login' component={LoginScreen} title='Login' hideNavBar /> <Scene
// key='listviewExample' component={ListviewExample} title='Listview Example' />
// <Scene key='listviewGridExample' component={ListviewGridExample}
// title='Listview Grid' /> <Scene key='listviewSectionsExample'
// component={ListviewSectionsExample} title='Listview Sections' /> <Scene
// key='mapviewExample' component={MapviewExample} title='Mapview Example' />
// <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
// <Scene key='theme' component={ThemeScreen} title='Theme' /> <Scene
// key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />