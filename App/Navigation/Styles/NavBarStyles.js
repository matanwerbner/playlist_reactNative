import {
  Platform,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: '#0A0A0A',
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 20,
      },
      android: {
        top: 5,
      },
    }),
    left: 0,
    right: 0,
  },
  header: {
    backgroundColor: '#EFEFF2',
    paddingTop: 0,
    top: 0,
    ...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 54,
      },
    }),
    right: 0,
    left: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#828287',
    position: 'absolute',
  },
  backButton: {
    width: 130,
    height: 37,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 22,
      },
      android: {
        top: 10,
      },
    }),
    left: 2,
    padding: 8,
    flexDirection: 'row',
  },
  rightButton: {
    width: 100,
    height: 37,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 22,
      },
      android: {
        top: 10,
      },
    }),
    right: 2,
    padding: 8,
  },
  leftButton: {
    width: 100,
    height: 37,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 20,
      },
      android: {
        top: 8,
      },
    }),
    left: 2,
    padding: 8,
  },
  barRightButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'right',
    fontSize: 17,
  },
  barBackButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'left',
    fontSize: 17,
    paddingLeft: 6,
  },
  barLeftButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'left',
    fontSize: 17,
  },
  backButtonImage: {
    width: 13,
    height: 21,
  },
  rightButtonIconStyle: {

  },
  defaultImageStyle: {
    height: 24,
    resizeMode: 'contain',
  },
});