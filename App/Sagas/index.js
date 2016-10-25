import {takeLatest} from 'redux-saga'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugSettings from '../Config/DebugSettings'
import YoutubeApi from '../Services/YouTubeApi';
/* ------------- Types ------------- */

// import { StartupTypes } from '../Redux/StartupRedux' import {
// TemperatureTypes } from '../Redux/TemperatureRedux' import { LoginTypes }
// from '../Redux/LoginRedux'
import {HomeTypes} from '../Redux/homeRedux';
import {PlTypes} from '../Redux/playlistRedux';
import {MyGroupsTypes} from '../Redux/myGroupsRedux';
import {AddTrackTypes} from '../Redux/addTrackRedux';
import {PostTrackTypes} from '../Redux/postTrackRedux';
/* ------------- Sagas ------------- */

// import { startup } from './StartupSagas' import { login } from './LoginSagas'
// import { getTemperature } from './TemperatureSagas'
import {getPlaylists} from './homeSagas';
import {getPlaylist, setPlayingItemRequest} from './playlistSagas'
import {fetchMyGroups} from './myGroupsSagas';
import {fetchSuggestions} from './addTrackSagas';
import {fetchGroups, postTrackRequest} from './postTrackSagas';
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugSettings.useFixtures
  ? FixtureAPI
  : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root() {
  while (true) {

    yield[takeLatest(HomeTypes.PLAYLISTS_REQUEST, getPlaylists, api),
      takeLatest(PlTypes.PLAYLIST_REQUEST, getPlaylist, api),
      takeLatest(MyGroupsTypes.FETCH_MY_GROUPS_REQUEST, fetchMyGroups, api),
      takeLatest(AddTrackTypes.FETCH_SUGGESTIONS_REQUEST, fetchSuggestions, api),
      takeLatest(PostTrackTypes.FETCH_GROUPS_REQUEST, fetchGroups, api),
      takeLatest(PostTrackTypes.POST_TRACK_REQUEST, postTrackRequest, api)]
  }
}
