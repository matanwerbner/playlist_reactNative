import {ApplicationStyles, Metrics, Colors, Fonts} from '../../Themes';

export default {
    mainContainer: {
        alignItems: "center",
        flex: 1
    },
    modalContent: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    header: {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1
        },
        text: {
            ...Fonts.style.h6
        }
    },
    body: {
        container: {
            marginTop: 5
        },
        header: {
            ...Fonts.style.description,
        },
        thumbnail: {
            width: 320,
            height: 150,
            marginTop: 5
        }
    },
     ...ApplicationStyles.screen
}