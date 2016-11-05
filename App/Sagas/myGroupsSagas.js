import { put, call } from 'redux-saga/effects'
import myGroupsActions from '../Redux/myGroupsRedux';
// attempts to login
export function * fetchMyGroups (api) {
  const response = yield call(api.getMyGroups);
  if (response.ok) {
    yield put(myGroupsActions.fetchMyGroupsSuccess(response.data));
  } else {
  }
}

export function * createGroup(api, action) {
  const response = yield call(api.createGroup, action.groupName);
  yield put(myGroupsActions.createGroupSuccess())
}