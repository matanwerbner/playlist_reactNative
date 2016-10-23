import React from 'react';
import PlYoutube from './PlYoutube';
import { View } from 'react-native';

export default({item, onError, onNext, autoplay=true}) => {
    const emptyFunc = () => {
        debugger;
        console.log('vide ended');
    }
    return (
        <View>
            <PlYoutube autoplay={ autoplay } item={item} onNext={onNext || emptyFunc} onError={ onError || emptyFunc}/>
        </View>
    )
}