import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native';
import styles from './addTrack.styles';
import PlIconButton from '../../../Components/PlIconButton';
import AddTrackActions from '../../../Redux/addTrackRedux';
import PlSpinner from '../../../Components/PlSpinner';
import {connect} from 'react-redux';
import {get, debounce} from 'lodash';
import SuggestionList from './suggestionList';
import PostTrackModal from '../../shared/postTrack';

const DEBOUNCE_TIME = 700;
const PLACEHOLDER = 'Search Youtube for...';

class AddTrackForm extends React.Component {
    constructor(props) {
        super(props);
        this._searchTxtChanged = this
            ._searchTxtChanged
            .bind(this);
        this._searchClicked = this
            ._searchClicked
            .bind(this);
        this.state = {
            text: ''
        }
    }

    componentWillMount() {
        this.fetchTracksDebounced = debounce(function (arg) {
            this
                .props
                .fetchSuggestionsRequest(arg);
        }, DEBOUNCE_TIME)
    }

    _searchClicked() {

        const {fetchSuggestionsRequest} = this.props;
        fetchSuggestionsRequest(this.state.text);
    }

    _searchTxtChanged(newText) {
        this.setState({text: newText});
        this.fetchTracksDebounced(this.state.text)
    }

    render() {
        const {text} = this.state;
        const {matches, isFetching, modal, showPostTrackModal, hidePostTrackModal} = this.props;
        const matchesView = matches && !isFetching
            ? (<SuggestionList onTrackSelected={showPostTrackModal} items={matches}/>)
            : <View style={ styles.noMatches.container}>
                <Text style={ styles.noMatches.text}>No Results...</Text>
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
                { matchesView }
                { spinnerView }
                <View style={styles.matchesContainer}>
                    {matches && !isFetching && <SuggestionList onTrackSelected={showPostTrackModal} items={matches}/>
}
                    {modal.show && 
                        <PostTrackModal 
                            onClose={hidePostTrackModal}
                            modalContext={modal}
                        />
}
                </View>
            </View>
        )
    }
}

const mapStateToThis = ({addTrack}) => {
    return {
        isFetching: addTrack.fetching,
        matches: get(addTrack, "data.items"),
        modal: addTrack.modal
    }
}

export default connect(mapStateToThis, AddTrackActions)(AddTrackForm);