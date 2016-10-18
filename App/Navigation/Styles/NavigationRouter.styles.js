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
   ...ApplicationStyles.screen
}
