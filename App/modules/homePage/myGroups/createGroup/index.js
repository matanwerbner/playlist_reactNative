import React, {Component} from 'react'
import {View, Icon} from 'react-native';
import PlText from '../../../../Components/PlText';
import styles from './createGroup.style';
import PlIconButton from '../../../../Components/PlIconButton';
import PlTextInput from '../../../../Components/PlTextInput'
import PlAuthenticatedPage from '../../../../Components/PlAuthenticatedPage'
const PLACEHOLDER = "What's the group name going to be?";

export default({
    onActiveChange,
    onSubmit,
    groupName,
    onGroupNameChange,
    isActive,
    loggedInUserId
}) => {

    const _CreateGroupBtn = (
        <View style={styles.container}>
            <PlIconButton name="add" onPress={() => onActiveChange(true)}></PlIconButton>
        </View>
    )
    const _TextInputContainer = () => {
        if (loggedInUserId) {
            return (
                <View style={styles.container}>
                    <View style={styles.txtInputContainer}>
                        <PlTextInput
                            value={groupName}
                            onChange={(newVal) => onGroupNameChange(newVal)}
                            placeholder={PLACEHOLDER}/>
                    </View>
                    <View style={styles.btnsContainer}>
                        <PlIconButton name="close" onPress={() => onActiveChange(false)}/>
                        <PlIconButton
                            disabled={!groupName}
                            name="check"
                            iconStyle={styles.saveIcon}
                            style={styles.saveBtn}
                            onPress={onSubmit}/>
                    </View>
                </View>
            )
        }
        return <PlAuthenticatedPage><View></View></PlAuthenticatedPage>;
    }

    const _fbLoginBtn = <View/>
    return (isActive
        ? _TextInputContainer()
        : _CreateGroupBtn)

}