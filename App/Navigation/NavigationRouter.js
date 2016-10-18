import React, {Component} from 'react'
import {Scene, Router, Reducer} from 'react-native-router-flux'

import I18n from 'react-native-i18n'
import homeActions from '../Redux/homeRedux';
import {connect} from 'react-redux'
import FacebookTabBar from './FacebookTabBar';
// screens identified by the router
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import PlScreen from '../modules/playlistPage'
import MyGroups from '../modules/homePage/myGroups';
import AddTrack from '../modules/homePage/addTrack';
import RecentActivity from '../modules/homePage/recentActivity';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import styles from './Styles/NavigationRouter.styles.js'
/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

const Tabs = {
  home: {
    icon: "update",
    text: "RECENT UPDATES"
  },
  groups: {
    icon: "group",
    text: "MY GROUPS"
  },
  add: {
    icon: "add",
    text: "POST A TRACK"
  }
}

const _getHomePage = () => <ScrollableTabView
  initialPage={2}
  tabBarPosition="bottom"
  renderTabBar={() => <FacebookTabBar/>}>
  <RecentActivity tabLabel={Tabs.home}/>
  <MyGroups tabLabel={Tabs.groups}/>
  <AddTrack tabLabel={Tabs.add}/>
</ScrollableTabView>

const _renderRightButton = () => {
  return <View style={{ padding: 10, backgroundColor: 'green'}}><Icon name="add" /></View>
}

export default() => {

  return (
    <Router createReducer={reducerCreate}>
      <Scene key="root">
        <Scene
          duration={0}
          key="home"
          sceneStyle={styles.mainContainer}
          component={_getHomePage}
          titleStyle={styles.navBar.title}
          navigationBarStyle={styles.navBar.container}
          initial
          title="HOME"/>
        <Scene
          key="playlist"
          duration={0}
          getTitle={(state) => state.groupName}
          component={PlScreen}
          titleStyle={styles.navBar.title}
          navigationBarStyle={styles.navBar.container}/>
      </Scene>
    </Router>
  )

}

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};