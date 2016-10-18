import {StyleSheet} from 'react-native'
import Colors from '../../Themes/Colors';
export default {
  tab : {
    container: {
      borderTopWidth: 3,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 5,
      borderColor: Colors.blue
    },
    activeContainer: {
      borderTopColor: Colors.bloodOrange
    },
    text: {
      fontSize: 11,
      color: Colors.snow
    },
    activeText: {
      color: Colors.coal
    }
  },
  tabs : {
    height: 50,
    flexDirection: 'row',
    backgroundColor: Colors.blue
  }
};