import {ApplicationStyles, Metrics, Colors} from '../../../../Themes/'

const commonItem = {
    
}

export default {
    textContainer: {
        backgroundColor: Colors.charcoal,
        flexDirection: 'row',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderBottomColor: Colors.frost,
        borderBottomWidth: 1
    },
    item: {
        color: Colors.snow,
        ...commonItem
    },
    activeItem: {
        color: Colors.bloodOrange,
        ...commonItem
    }
}