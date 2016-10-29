import { Fonts, Colors } from '../../Themes'

export default {
    mainContainer : {
        flex: 1,
        padding: 20
    },
    groupName : {
        flex: 1
    },
    title: {
        container: {
            marginBottom: 10
        },
        text: {
            color: Colors.pink,
            ...Fonts.style.h4
        }
    },
    footer: {

    }
}