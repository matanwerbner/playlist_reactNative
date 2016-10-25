
import {ApplicationStyles, Metrics, Colors, Fonts} from '../../../Themes';

export default {
    label: {
        ...Fonts.style.description
    },
    selectedLabel: {
        color: Colors.blue,
        ...Fonts.style.description
    },
    cbContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cb: {
        width: 10,
        height: 10
    }
}