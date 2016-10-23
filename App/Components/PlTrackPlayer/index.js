import React from 'react';
import PlYoutube from './PlYoutube';
import { View } from 'react-native';

export default({item, onError, onNext}) => {
    const emptyFunc = () => {
        debugger;
        console.log('vide ended');
    }
    return (
        <View>
            <PlYoutube item={item} onNext={onNext || emptyFunc} onError={ onError || emptyFunc}/>
        </View>
    )
}