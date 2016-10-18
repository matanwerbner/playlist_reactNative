
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  recentActivity: null,
  filter: {
    enabled: false,
    value: null
  }
})

const { Types, Creators } = createActions({
  playlistsRequest: ['skip', 'take'],
  playlistsSuccess: ['data'],
  playlistsFailed: ['error'],
  toggleSearch: null
});

export const HomeTypes = Types
export default Creators;

export const request = (state) =>
  state.merge({ fetching: true, recent: null })

export const success = (state, action) => {
  const { recentActivity } = action.data;
  return state.merge({ fetching: false, error: null, recentActivity })
}

// failed to get the temperature
export const failure = state =>
  state.merge({ fetching: false, error: true, recentActivity: null })

export const toggleFilter = (state, action) =>
  state.merge({ filter: { enabled: !state.search.enabled, value: null} })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAYLISTS_REQUEST]: request,
  [Types.PLAYLISTS_SUCCESS]: success,
  [Types.PLAYLISTS_FAILED]: failure,
  [Types.TOGGLE_SEARCH]: toggleFilter
})