import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native';
import styles from './addTrack.styles';
import AddTrackActions from '../../../Redux/addTrackRedux';
import {connect } from 'react-redux';
var _ = require('lodash')
const DEBOUNCE_TIME = 700;

class AddTrackForm extends React.Component {
    constructor(props){
        super(props);
        this._searchTxtChanged = this._searchTxtChanged.bind(this);
        this.state = {
            text: 'Hi!'
        }
        this.fireEvents = _.debounce(function(){
            debugger;
        }, 250, { 'maxWait': 1000 });
    }

    componentWillMount() {
       this.handleSearchDebounced = _.debounce(function () {
           this.props.fetchSuggestionsRequest.apply(this, [this.state.text]);
       }.bind(this), DEBOUNCE_TIME);
    }


    _searchTxtChanged(newText) {
        this.setState({
            text: newText
        });
        this.handleSearchDebounced();
    }

    render() {
        const { text } = this.state;
        const { data } = this.props;
        return (
            <View style={ styles.addTrackContainer}>
                <TextInput
                    style={styles.searchTxt}
                    onChangeText={this._searchTxtChanged}
                    value={ text }/>
                    <Text>
                { data ? data.items.length : 'no items' }
                </Text>
            </View>
        )
    }
}

const mapStateToThis = ({ addTrack }) => {
    return {
        text: addTrack.text,
        data: addTrack.data
    }
}

export default connect(mapStateToThis, AddTrackActions)(AddTrackForm);