import { put, call } from 'redux-saga/effects'
import myGroupsActions from '../Redux/myGroupsRedux';
// attempts to login
export function * fetchMyGroups (api) {
  const response = yield call(api.getMyGroups);
  if (response.ok) {
    yield put(myGroupsActions.fetchMyGroupsSuccess(response.data));
  } else {
   debugger;
  }
}