import { Colors, Fonts } from '../../../../../../Themes';

export default {

    itemContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        paddingVertical: 5,
        justifyContent:'space-around'
    },
    imageContainer: {
        alignItems: 'center',
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        marginRight: 10,
        width: 50,
        height: 50
    },
    groupName: {
        color: Colors.pink,
        ...Fonts.style.small,
    },
    trackTitle: {
        color: Colors.blue
    },
    statsContainer: {
        width: 50,
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    statsIcon: {
        marginRight: 5
    },
    statContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statText: {
        ...Fonts.style.small
    }
}