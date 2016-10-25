import {Colors, ApplicationStyles} from '../../Themes/'

export default {
  container : {
    flex: 1
  },
  title : {
    color: Colors.snow
  },
  leftButton : {
    tintColor: Colors.snow
  },
  rightButton : {
    color: Colors.snow
  },
  navBar : {
    container: {
      backgroundColor: Colors.blue
    },
    title: {
      color: Colors.snow
    }
  },
  tabIcon: {
    selected: {
       width: 30,
       height: 30,
       color: '#fff'
    },
    default: {
      width: 30,
      height: 30
    }
  },
  tabBar: {
    backgroundColor: Colors.blue
  },
  leftTitlebarButton: {
    container: {
      flexDirection: 'row'
    },
    menu: {
      color: "#fff"
    }
  },
   ...ApplicationStyles.screen
}
