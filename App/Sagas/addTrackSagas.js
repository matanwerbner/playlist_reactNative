import {call, put} from 'redux-saga/effects'
import AddTrackActions from '../Redux/addTrackRedux';


export function * fetchSuggestions(youtubeApi, action) {
  const response = yield call(youtubeApi.getSuggestions, action.text);
  yield put(AddTrackActions.fetchSuggestionsSuccess(response));

}
