import {call, put} from 'redux-saga/effects'
import PlActions from '../Redux/playlistRedux';

function *sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

// attempts to login
export function * getPlaylist(api, action) {
  const response = yield call(api.getPlaylist, action.groupId);
  if (response.ok) {
    yield put(PlActions.playlistSuccess(response.data));
  } else {
    yield put(PlActions.playlistFailed(response.error));
  }

}