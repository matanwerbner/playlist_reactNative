import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    homePage: require('./homeRedux').reducer,
    playlistPage: require('./playlistRedux').reducer,
    myGroups: require('./myGroupsRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
