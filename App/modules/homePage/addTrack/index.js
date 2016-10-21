import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native';
import styles from './addTrack.styles';
import PlIconButton from '../../../Components/PlIconButton';
import AddTrackActions from '../../../Redux/addTrackRedux';
import PlSpinner from '../../../Components/PlSpinner';
import {connect} from 'react-redux';
import {get} from 'lodash';
import SuggestionList from './suggestionList';
const DEBOUNCE_TIME = 700;
const PLACEHOLDER = 'hi!';

class AddTrackForm extends React.Component {
    constructor(props) {
        super(props);
        this._searchTxtChanged = this
            ._searchTxtChanged
            .bind(this);
        this._searchClicked = this._searchClicked.bind(this);
        this.state = {
            text: ''
        }
    }

    componentWillMount() {
    }

    _searchClicked() {

        const {fetchSuggestionsRequest} = this.props;
        fetchSuggestionsRequest(this.state.text);
    }

    _searchTxtChanged(newText) {
        this.setState({text: newText});
    }

    render() {
        const {text} = this.state;
        const {matches, isFetching} = this.props;
        return (
            <View style={styles.addTrackContainer}>
                <View style={ styles.searchContainer}>
                    <TextInput
                        placeholder={ PLACEHOLDER }
                        style={styles.searchTxt}
                        onChangeText={this._searchTxtChanged}
                        value={text}/>
                    <PlIconButton 
                        name="search"
                        disabled={ isFetching }
                        onPress={ this._searchClicked } />
                </View>
                { isFetching && <PlSpinner /> }
                <View style={ styles.matchesContainer}>
                { 
                    matches && !isFetching &&
                    <SuggestionList items={ matches } />
                }
                </View>
            </View>
        )
    }
}

const mapStateToThis = ({addTrack}) => {
    return {
        isFetching: addTrack.fetching, 
        matches: get(addTrack, "data.items")
    }
}

export default connect(mapStateToThis, AddTrackActions)(AddTrackForm);