
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  data: null
})


const { Types, Creators } = createActions({
  fetchMyGroupsRequest: null,
  fetchMyGroupsSuccess: ['data'],
  createGroupRequest: ['groupName'],
  createGroupSuccess: ['result']
});

export const MyGroupsTypes = Types
export default Creators;

export const request = (state) =>
  state.merge({ fetching: true, data: null, error: null })

export const success = (state, action) => {
  return state.merge({ fetching: false, error: null, data: action.data })
}

export const createRequest = (state) => 
   state.merge({ fetching: true})

export const createSuccess = (state, action) => {
  return state.merge({ fetching: false, data: [ action.result.data, ...state.data]})
} 

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_MY_GROUPS_REQUEST]: request,
  [Types.FETCH_MY_GROUPS_SUCCESS]: success,
  [Types.CREATE_GROUP_REQUEST]: createRequest,
  [Types.CREATE_GROUP_SUCCESS]: createSuccess
})