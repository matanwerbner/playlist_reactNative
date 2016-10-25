import React from 'react';
import PlList from '../../../Components/PlList';
import {View, Text, ScrollView} from 'react-native';
import CheckBox from 'react-native-checkbox';
import styles from './groupSelect.style';

export default({items, onSelect}) => {

    const _renderRow = (item) => {
        return <View>
            <CheckBox
                containerStyle={ styles.cbContainer}
                checkboxStyle={styles.cb}
                label={item.group.name}
                labelStyle={item.selected 
                    ?styles.selectedLabel 
                    :styles.label}
                checked={item.selected}
                onChange={() => onSelect(item) }/>
        </View>
    }
    return (
        <View style={{ flex: 1}}>
        <Text>Post in groups:</Text>
        <ScrollView contentContainerStyle={styles.groupContainer}>
            <PlList items={items} onPress={ onSelect } renderRow={_renderRow}/>
        </ScrollView>
        </View>
    )
}