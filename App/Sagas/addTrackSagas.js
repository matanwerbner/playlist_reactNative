import {call, put} from 'redux-saga/effects'
import AddTrackActions from '../Redux/addTrackRedux';


export function * fetchSuggestions(api, action) {
  const response = yield call(api.getSuggestions, action.text);
  yield put(AddTrackActions.fetchSuggestionsSuccess(response));

}
