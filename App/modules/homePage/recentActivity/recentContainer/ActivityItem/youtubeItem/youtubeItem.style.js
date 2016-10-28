import Colors from '../../../../../../Themes/Colors';

export default {

    itemContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 0.5,
    },
    subTitleContainer: {
        flex: 0.5,
        marginLeft: 10,
        alignItems: 'center',
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
        marginRight: 10,
        width: 50,
        height: 50
    },
    arrowIcon: {
        marginHorizontal: 6,
        marginTop: 2
    },
    groupName: {
        color: Colors.bloodOrange
    },
    trackTitle: {
        color: Colors.blue
    }
}