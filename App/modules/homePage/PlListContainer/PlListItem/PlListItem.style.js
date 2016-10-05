import {ApplicationStyles, Metrics, Colors, Fonts} from '../../../../Themes/'

export default {
    itemContainer: {
        padding: 10,
        flex: 1,
        flexDirection: 'row'
    },
    viewsContainer: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
    imageContainer: {
        marginLeft: 20
    },
    image: {
        width: 70,
        height: 70
    },
    genreText: {
        color: Colors.fire,
        fontSize: Fonts.size.small
    }
}