import { put, call, select} from 'redux-saga/effects'
import myGroupsActions from '../Redux/myGroupsRedux';
// attempts to login
export function * fetchMyGroups (api) {
  const response = yield call(api.getMyGroups);
  if (response.ok) {
    yield put(myGroupsActions.fetchMyGroupsSuccess(response.data));
  } else {
  }
}

const getAdminId = state => state.loggedInUser.id;

export function * createGroup(api, action) {
  const adminId = yield select(getAdminId)
  const response = yield call(api.createGroup, action.groupName, adminId);
  yield put(myGroupsActions.createGroupSuccess(response))
}