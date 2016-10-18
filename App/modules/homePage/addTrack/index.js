import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './addTrack.styles';
const _addTrackPage = () => {
    return <View>
        <Text>
            AddTrack page!
        </Text>
    </View>
}

const mapStateToThis = (state) => ({

})

export default connect(mapStateToThis,null)(_addTrackPage);