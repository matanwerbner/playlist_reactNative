import {Colors, ApplicationStyles, Fonts} from '../../Themes/'

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
      alignItems: 'flex-end',
      justifyContent: 'center',
      backgroundColor: Colors.snow
    },
    leftButtonColor: {
      tintColor: Colors.blue
    },
    logoImage: {
      width:60,
      height: 60,
      resizeMode: 'contain'
    },
    logoText: {
      marginRight: 8,
      ...Fonts.style.h5,
      color: Colors.blue
    },
    logoContainer: {
      paddingRight: 20,
      flexDirection: 'row',
      flex: 1,
      maxWidth: 200,
      justifyContent: 'space-between',
      alignItems:'center'
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
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    menu: {
      color: Colors.blue
    }
  },
   ...ApplicationStyles.screen
}
