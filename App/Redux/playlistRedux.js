
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  playlist: null
})


const { Types, Creators } = createActions({
  playlistRequest: ['groupId'],
  playlistSuccess: ['data'],
  playlistFailed: ['error'],
  resetPlaylist: null
});

export const PlTypes = Types
export default Creators;

export const request = (state) =>
  state.merge({ fetching: true, playlist: null })

export const success = (state, action) => {
  const playlist = action.data;
  return state.merge({ fetching: false, error: null, playlist })
}

// failed to get the temperature
export const failure = state =>
  state.merge({ fetching: false, error: true, playlist: null })

export const reset = state => state.merge({ playlist: null })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAYLIST_REQUEST]: request,
  [Types.PLAYLIST_SUCCESS]: success,
  [Types.PLAYLIST_FAILED]: failure,
  [Types.resetPlaylist]: reset
})