import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux'
import styles from './addTrack.styles';
import PlIconButton from '../../../Components/PlIconButton';
import AddTrackActions from '../../../Redux/addTrackRedux';
import PlSpinner from '../../../Components/PlSpinner';
import {connect} from 'react-redux';
import {get, debounce} from 'lodash';
import SuggestionList from './suggestionList';

const DEBOUNCE_TIME = 300;
const PLACEHOLDER = 'Search Youtube for...';

class AddTrackForm extends React.Component {
    constructor(props) {
        super(props);
        this._searchTxtChanged = this
            ._searchTxtChanged
            .bind(this);
        this.state = {
            text: ''
        }
    }

    componentWillMount() {
        this.fetchTracksDebounced = debounce((arg) => {
            this.props.fetchSuggestionsRequest(arg);
        }, DEBOUNCE_TIME)
    }

    _searchTxtChanged(newText) {
        this.setState({text: newText});
        this.fetchTracksDebounced(this.state.text)
    }

    _trackSelected(track) {
        Actions.postTrack({track});
    }

    render() {
        const {text} = this.state;
        const {matches, isFetching, modal} = this.props;
        const matchesView = matches && !isFetching
            ? (<SuggestionList onTrackSelected={this._trackSelected} items={matches}/>)
            : <View style={styles.noMatches.container}>
                <Text style={styles.noMatches.text}>No Results...</Text>
            </View>
        const spinnerView = isFetching && <PlSpinner/>;
        return (
            <View style={styles.addTrackContainer}>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder={PLACEHOLDER}
                        style={styles.searchTxt}
                        onChangeText={this._searchTxtChanged}
                        value={text}/>
                </View>
                {spinnerView}
                <View style={styles.matchesContainer}>

                    {matchesView}
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