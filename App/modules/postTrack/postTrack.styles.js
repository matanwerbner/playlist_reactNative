import {ApplicationStyles, Metrics, Colors, Fonts} from '../../Themes';

export default {
    mainContainer : {
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 20
    },
    header : {
        container: {
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        text: {
            flex: 1,
            color: Colors.blue,
            ...Fonts.style.h6
        }
    },
    body : {
        container: {
            marginTop: 5,
            flex: 1
        },
        header: {
            ...Fonts.style.description
        },
        thumbnail: {
            width: 320,
            height: 150,
            marginTop: 5,
            marginBottom: 15
        }
    },
    groupsContainer : {
        flex: 1,
        padding: 5
    },
    footer : {
        container: {
            paddingVertical: 25,
            flexDirection: 'row',
        },
        btnsContainer: {
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center'
        }
    }
}