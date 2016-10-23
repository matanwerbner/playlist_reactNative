import {ApplicationStyles, Metrics, Colors} from '../../../../Themes/'

const commonItem = {
    
}

export default {
    textContainer: {
        flexDirection: 'row',
    },
    item: {
        color: Colors.coal,
        ...commonItem
    },
    activeItem: {
        color: Colors.bloodOrange,
        ...commonItem
    }
}