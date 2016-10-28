import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';
const _Storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,
    storageBackend: AsyncStorage,

    // expire time, default 1 day(1000 * 3600 * 24 milliseconds). can be null, which
    // means never expire.
    defaultExpires: 1000 * 3600 * 24 * 10,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired, the corresponding sync method
    // will be invoked and return the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

export const getLoggedInUser = () => {
    return _Storage
        .load({key: 'loggedInUser'})
        .catch(err => {
            // any exception including data not found goes to catch()
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
        });
}

export const setLoggedInUser = ({profile, credentials}) => {
    _Storage
        .save({
            key: 'loggedInUser', // Note: Do not use underscore("_") in key!
            rawData: {
                profile,
                credentials
            }
        });
}