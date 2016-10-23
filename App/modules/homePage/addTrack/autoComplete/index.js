import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './autoComplete.style';

export default ({items}) => {
   return (
    <View style={ styles.container }>
        {
            items.map((s) => (
                <TouchableHighlight>
                    <Text>
                        { s.snippet.title }
                    </Text>
                </TouchableHighlight>
            ))
        }
    </View>)
}