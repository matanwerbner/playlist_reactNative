import Colors from '../../../../../../Themes/Colors';

export default {

    itemContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    titleContainer: {
        flexDirection: 'row'
    },
    subTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    imageContainer: {
        alignItems: 'center',
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    playArrowContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 260,
        height: 150
    },
    arrowIcon: {
        marginRight: 3,
        color: Colors.bloodOrange
    },
    groupName: {
        color: Colors.bloodOrange
    },
    trackTitle: {
        color: Colors.blue
    }
}