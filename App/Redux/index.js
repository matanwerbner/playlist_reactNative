import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    homePage: require('./homeRedux').reducer,
    playlistPage: require('./playlistRedux').reducer,
    myGroups: require('./myGroupsRedux').reducer,
    addTrack: require('./addTrackRedux').reducer,
    postTrack: require('./postTrackRedux').reducer,
    loggedInUser: require('./loggedInUserRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
