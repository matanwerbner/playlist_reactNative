import {StyleSheet} from 'react-native'
import {ApplicationStyles, Metrics, Colors} from '../../Themes/'

export default {
    mainContainer: {
        alignItems: "center",
        flex: 1
    },
    itemsContainer: {
        marginTop: 10
    },
    videoContainer: {
        height: 250
    },
     ...ApplicationStyles.screen
}