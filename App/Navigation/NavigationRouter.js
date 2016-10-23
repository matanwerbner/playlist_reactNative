import React, {Component} from 'react'
import {Scene, Router, Reducer, Actions} from 'react-native-router-flux'

import I18n from 'react-native-i18n'
import homeActions from '../Redux/homeRedux';
import {connect} from 'react-redux'
import FacebookTabBar from './FacebookTabBar';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import styles from './Styles/NavigationRouter.styles.js'
import ShareMenu from 'react-native-share-menu';

import SharePage from '../modules/sharePage';
import PlScreen from '../modules/playlistPage'
import MyGroups from '../modules/homePage/myGroups';
import PostTrack from '../modules/postTrack';
import AddTrack from '../modules/homePage/addTrack';
import RecentActivity from '../modules/homePage/recentActivity';

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
  return <View style={{
    padding: 10,
    backgroundColor: 'green'
  }}><Icon name="add"/></View>
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
    return (
      <Router createReducer={reducerCreate}>
        <Scene
          key="root"
          navigationBarStyle={styles.navBar.container}
          titleStyle={styles.navBar.title}
          leftButtonIconStyle={{
          tintColor: 'white'
        }}>
        <Scene
          duration={0}
          key="home"
          initial
          component={_getHomePage}
          sceneStyle={styles.mainContainer}
          
          title="HOME"/>
        <Scene
          key="playlist"
          duration={0}
          getTitle={(state) => state.groupName}
          sceneStyle={styles.mainContainer}
          
          component={PlScreen} />
          <Scene
          key="incomingShare"
          sceneStyle={styles.mainContainer}
          
          component={SharePage}/>
        <Scene
          key="postTrack"
          component={PostTrack}
          sceneStyle={styles.mainContainer}
          
          title="POST YOUR TRACK"/>
      </Scene>
    </Router>
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