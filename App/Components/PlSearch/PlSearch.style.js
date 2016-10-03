import {ApplicationStyles, Metrics, Colors} from '../../Themes';
const padding = 10;

export default {
    plSearchContainer: {
        backgroundColor: Colors.snow,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: padding,
        paddingLeft: padding,
        paddingRight: padding
    },
    searchIcon: {
        paddingRight: padding,
        paddingLeft: padding
    },
    textInputStyle: {
        flexDirection: 'row-reverse',
        flex: 1,
        textAlign: 'right',
        padding: 5
    }
}