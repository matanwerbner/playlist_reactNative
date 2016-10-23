import {StyleSheet} from 'react-native'
import {ApplicationStyles, Metrics, Colors, Fonts} from '../../../Themes/'

export default {
  addTrackContainer : {
    paddingVertical: 20
  },
  searchContainer : {
    flexDirection: 'row'
  },
  noMatches : {
    container: {
    },
    text: {
      textAlign: 'center',
      justifyContent: 'center'
    }
  },
  searchTxt : {
    flex: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 5,
    ...Fonts.style.input
  }
}