import React, {Component} from 'react'
import {Scene, Router, Reducer, Actions} from 'react-native-router-flux'

import I18n from 'react-native-i18n'
import homeActions from '../Redux/homeRedux';
import {connect} from 'react-redux'
import FacebookTabBar from './FacebookTabBar';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import styles from './Styles/NavigationRouter.styles.js'
import ShareMenu from 'react-native-share-menu';
import PlAuthenticatedPage from '../Components/PlAuthenticatedPage';
import SharePage from '../modules/sharePage';
import PlScreen from '../modules/playlistPage'
import MyGroups from '../modules/homePage/myGroups';
import PostTrack from '../modules/postTrack';
import AddTrack from '../modules/homePage/addTrack';
import RecentActivity from '../modules/homePage/recentActivity';

const RouterWithRedux = connect()(Router);
const TabIcon = ({selected, title, iconName}) => {
  const style = selected
    ? styles.tabIcon.selected
    : styles.tabIcon.default;
  return (<Icon name={iconName} style={style} size={30}/>);
}

const Menu = <View style={styles.leftTitlebarButton.container}>
  <Icon name="menu" style={styles.leftTitlebarButton.menu} size={25}/>
</View>;

const Logo = <View style={styles.navBar.logoContainer}>
  <Text style={styles.navBar.logoText}>GROUPIES</Text>
  <Image
    size={20}
    style={styles.navBar.logoImage}
    source={require('../Images/logo.png')}/>
</View>

const Authenticated = (component) => {
  return <PlAuthenticatedPage>{component}</PlAuthenticatedPage>;
}

class _Router extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    ShareMenu.getSharedText((text) => {
      if (text && text.length) {
        Actions.incomingShare({type: 'reset', text});
      }
    })
  }

  render() {
    const commonScene = {
      navigationBarStyle: styles.navBar.container,
      titleStyle: styles.navBar.title,
      sceneStyle: styles.mainContainer,
      renderTitle: () => Logo,
      renderLeftButton: () => Menu,
      leftButtonIconStyle: styles.navBar.leftButtonColor
    }
    return (
      <RouterWithRedux createReducer={reducerCreate}>
        <Scene
          key="root"
          leftButtonIconStyle={{
          tintColor: 'white'
        }}>
          <Scene
            duration={0}
            key="home"
            tabBarStyle={styles.tabBar}
            tabs={true}
            title="HOME">
            <Scene
              {... commonScene }
              iconName="home"
              icon={TabIcon}
              key="recentActivity"
              title="Recent Activity"
              component={RecentActivity}/>
            <Scene
              {... commonScene }
              icon={TabIcon}
              iconName="group"
              key="myGroups"
              title="My Groups"
              initial
              component={() => <MyGroups/>}/>
            <Scene
              {... commonScene }
              icon={TabIcon}
              iconName="add"
              key="addTrack"
              title="Add Track"
              component={(props) => Authenticated(<AddTrack {...props} />)
            }/>

          </Scene>
          <Scene
            key="playlist"
            duration={0}
            getTitle={(state) => state.groupName}
            {... commonScene }
            component={PlScreen}/>
          <Scene
            key="incomingShare"
            sceneStyle={styles.mainContainer}
            component={SharePage}/>
          <Scene
            key="postTrack"
            component={(props) => Authenticated(<PostTrack { ...props } />)}
            {... commonScene }
            title="POST YOUR TRACK"/>
        </Scene>
      </RouterWithRedux>
    )
  }
}

export default _Router;

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};