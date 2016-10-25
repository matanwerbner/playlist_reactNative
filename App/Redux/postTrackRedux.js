
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  groups: null,
  postTrackPending: false,
  finishedPostingTrack: false
})


const { Types, Creators } = createActions({
  fetchGroupsRequest: null,
  fetchGroupsSuccess: ['data'],
  postTrackRequest: ['track', 'groups'],
  postTrackSuccess: []
});

export const PostTrackTypes = Types
export default Creators;

export const fetchGroupsRequest = (state) =>
  state.merge({ fetching: true, groups: null, error: null })

export const fetchGroupsSuccess = (state, action) => {
  return state.merge({ fetching: false, error: null, groups: action.data })
}

export const postTrackRequest = (state) =>
  state.merge({ postTrackPending: true })

export const postTrackSuccess = (state, action) => {
  return state.merge({ postTrackPending: false, finishedPostingTrack: true })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_GROUPS_REQUEST]: fetchGroupsRequest,
  [Types.FETCH_GROUPS_SUCCESS]: fetchGroupsSuccess,
  [Types.POST_TRACK_REQUEST]: postTrackRequest,
  [Types.POST_TRACK_SUCCESS]: postTrackSuccess
})