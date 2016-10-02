import {call, put} from 'redux-saga/effects'
import HomeActions from '../Redux/homeRedux';

// attempts to login
export function * getPlaylists(api, action) {
  const response = yield call(api.getPlaylists);
  if (response.ok) {
    yield put(HomeActions.playlistsSuccess(response.data));
  } else {
    yield put(HomeActions.playlistsFailed(response.error));
  }

}
