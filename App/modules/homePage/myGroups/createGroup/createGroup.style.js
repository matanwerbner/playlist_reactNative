import {Colors, Fonts} from '../../../../Themes'

export default {
    container : {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 0,
        justifyContent: 'space-between',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    text : {
        ...Fonts.style.description,
        color: Colors.pink,
        marginLeft: 5
    },
    modal : {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnsContainer: {
        flexDirection: 'row'
    },
    txtInputContainer: {
        flex: 1,
        marginRight: 20
    },
    saveBtn: {
        marginLeft: 10,
        borderColor: Colors.success.text,
        backgroundColor: Colors.success.text
    },
    saveIcon: {
        color: Colors.snow
    }
}