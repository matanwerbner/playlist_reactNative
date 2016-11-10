var t = require('tcomb-form-native');
import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import styles from './editGroupForm.style';
import formStyle from './formStyle';
import PlButton from '../../../Components/PlButton';
const Form = t.form.Form;
// here we are: define your domain model
let GroupStruct = t.struct({name: t.String});

const options = {
    stylesheet: formStyle
}; // optional rendering options (see documentation)

export default class EditGroupForm extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onPress = this.onPress.bind(this);
        this.state = {
            value: this.props.existingGroup
        }
    }

    onChange(value) {
        this.setState({value});
    }

    onPress() {
        var value = this.state.value;
        if (value) {
            console.log(value);
        }
    }

    render() {
        return <View style={styles.container}>
            <Form
                type={GroupStruct}
                options={options}
                onChange={this.onChange}
                value={this.state.value}/>
            <PlButton type="success" onPress={this.onPress}>
              <Text>Save</Text>
            </PlButton>
        </View>
    }
}