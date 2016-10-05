
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  playlist: null,
  playingItemIdx: null
})


const { Types, Creators } = createActions({
  playlistRequest: ['PlId'],
  playlistSuccess: ['data'],
  playlistFailed: ['error'],
  setPlayItemRequest: ['PiIdx'],
  setPlayItemSuccess: ['PiIdx'],
  setPlayItemFailed: [],
  finishedPlaying: null
});

export const PlTypes = Types
export default Creators;

export const request = (state) =>
  state.merge({ fetching: true, playlist: null })

export const success = (state, action) => {
  const playlist = action.data;
  return state.merge({ fetching: false, error: null, playlist, playingItemIdx: 0 })
}

// failed to get the temperature
export const failure = state =>
  state.merge({ fetching: false, error: true, playlist: null })

export const finishedPlaying = (state, action) => 
  state.merge({ playingItemIdx : 0 })

export const setPlayItemRequest = (state,action) => 
  state.merge({ playingItemIdx: null })

  export const setPlayItemSuccess = (state, action) => {
    return state.merge({ playingItemIdx : action.PiIdx })
  }

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAYLIST_REQUEST]: request,
  [Types.PLAYLIST_SUCCESS]: success,
  [Types.PLAYLIST_FAILED]: failure,
  [Types.SET_PLAY_ITEM_REQUEST]: setPlayItemRequest,
  [Types.SET_PLAY_ITEM_SUCCESS]: setPlayItemSuccess,
  [Types.FINISHED_PLAYING]: finishedPlaying
})