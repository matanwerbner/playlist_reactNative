import { put, call } from 'redux-saga/effects'
import postTrackActions from '../Redux/postTrackRedux';

export function * fetchGroups (api) {
  const response = yield call(api.getMyGroups);
  if (response.ok) {
    yield put(postTrackActions.fetchGroupsSuccess(response.data));
  } else {
  }
}
export function * postTrackRequest (api, {track, groups}) {
   
  //const response = yield call(api.getMyGroups);
//   if (response.ok) {
//     yield put(postTrackActions.postTrackSuccess());
//   } else {
//   }

    yield put(postTrackActions.postTrackSuccess());
}