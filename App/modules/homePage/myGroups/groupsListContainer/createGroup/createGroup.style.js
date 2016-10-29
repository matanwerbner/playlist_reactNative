import { Colors, Fonts } from '../../../../../Themes'

export default {
    container: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 0
    },
    text: {
        ...Fonts.style.description,
        color: Colors.pink,
        marginLeft: 5
    }
}