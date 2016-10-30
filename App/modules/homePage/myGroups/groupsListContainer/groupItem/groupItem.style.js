import {Fonts, Colors} from '../../../../../Themes/';

export default {
    itemContainer : {
        flex: 1,
        flexDirection: 'row'
    },
    textContainer : {
        flex: 1,
        justifyContent: 'center'
    },
    title : {
        container: {
            flexDirection: 'column'
        },
        groupNameContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 20
        },
        groupName: {
            color: Colors.coal,
            ...Fonts.style.h5
        },
        editBtn: {
            borderColor: Colors.bloodOrange
        },
        editIcon: {
            color: Colors.bloodOrange
        }
    },
    image : {
        container: {
            width: 70,
            justifyContent: 'center'
        },

        image: {
            width: 70,
            height: 70
        }
    },
    members : {
        container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            maxHeight: 50
        },
        admin: {
            ...Fonts.style.small,
            color: Colors.pink,
            marginRight: 3
        },
        member: {
            ...Fonts.style.small,
            marginRight: 3
        }
    },
    titleContainer : {
        justifyContent: 'space-between',
        flex: 1,
        paddingVertical: 2
    }
}