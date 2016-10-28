import { setLoggedInUser, getLoggedInUser } from '../Services/Storage';
import {call, put} from 'redux-saga/effects'
import LoggedInUserActions from '../Redux/loggedInUserRedux';

export function* loginRequest(){
    const userData = yield call(getLoggedInUser);
    if(userData) {
        yield put(LoggedInUserActions.loginSuccess(
            userData.profile,
            userData.credentials
        ));
    }else {
        yield put(LoggedInUserActions.loginFailure())
    }
}

export function* loginSuccess(data,data2,data3) {
    yield call(setLoggedInUser,data);
}