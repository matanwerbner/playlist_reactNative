
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: false,
  error: null
})

const { Types, Creators } = createActions({
  fetchSuggestionsRequest: ['text'],
  fetchSuggestionsSuccess: ['data'],
  fetchSuggestionsFailed: ['error']
});

export const AddTrackTypes = Types
export default Creators;

export const request = (state, action) =>
  state.merge({ fetching: true })

export const success = (state, action) => {
  return state.merge({ fetching: false, error: null, data: action.data })
}

// failed to get the temperature
export const failure = state =>
  state.merge({ fetching: false, error: true, recentActivity: null })

export const toggleFilter = (state, action) =>
  state.merge({ filter: { enabled: !state.search.enabled, value: null} })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_SUGGESTIONS_REQUEST]: request,
  [Types.FETCH_SUGGESTIONS_SUCCESS]: success,
  [Types.FETCH_SUGGESTIONS_FAILED]: failure
})