import React, {Component} from 'react';
import styles from './createGroup.styles';
import PlTextInput from '../../Components/PlTextInput';
import PlText from '../../Components/PlText';
import PlButton from '../../Components/PlButton';
import {Actions} from 'react-native-router-flux';
var t = require('tcomb-form-native');
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native';

const PLACEHOLDER = 'What\'s your group called?';
var Form = t.form.Form;
var Person = t.struct({
    'Group Name': t.String, // a required string
    'Group Description': t.maybe(t.String), // an optional string

});

class _PostTrack extends Component {
    constructor(props) {
        super(props);
        this._doCreate = this
            ._doCreate
            .bind(this);
    }

    _doCreate() {
        let value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
            console.log(value); // value here is an instance of Person
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.title.container}>
                    <PlText style={styles.title.text}>
                        LET'S MAKE A GROUP!
                    </PlText>
                </View>
                <View style={styles.groupNameContainer}>
                    <Form ref="form" type={Person}/>
                </View>
                <View style={styles.footer.container}>
                    <View style={styles.footer.btnsContainer}>

                        <PlButton onPress={Actions.pop}>
                            CANCEL
                        </PlButton>
                        <PlButton onPress={this._doCreate} type="success">
                            POST
                        </PlButton>
                    </View>

                </View>
            </View>
        )
    }
}

export default _PostTrack;