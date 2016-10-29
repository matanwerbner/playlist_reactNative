import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginSuccess: ['profile', 'credentials'],
  loginRequest: null,
  loginFailure: null,
  logout: null
})

export const LoggedInUserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  profile: null,
  credentials: null,
  userId: null,
  error: null,
  fetching: true,
  userNotFound: false
})

export const request = (state) => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, { profile, credentials }) => {
  return state.merge({ fetching: false, error: null, profile, credentials, userNotFound: false })
}

// we've had a problem logging in
export const failure = (state, { error }) => {
  debugger;
  return state.merge({ fetching: false, error, userNotFound: true })
}

// we've logged out
export const logout = state => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = loginState => loginState.username !== null
