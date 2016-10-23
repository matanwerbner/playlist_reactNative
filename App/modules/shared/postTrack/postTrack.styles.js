import {ApplicationStyles, Metrics, Colors, Fonts} from '../../../Themes';



export default {
    modalContainer: {

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
            ...Fonts.style.h4
        }
    },
    body: {
        container: {

        },
        header: {
            ...Fonts.style.description,
        },
        thumbnail: {
            width: 320,
            height: 150,
            marginTop: 5
        }
    }
}