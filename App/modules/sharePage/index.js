import React from 'react';
import {Text, View} from 'react-native';
import styles from './sharePage.styles.js';

export default({text}) => {
    return (
        <View style={styles.mainContainer}>
            <Text>{text}</Text>
        </View>
    )
}