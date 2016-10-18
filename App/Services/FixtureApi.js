export default {
  
  getRecentActivity: () => {
    return {
      ok: true,
      data: require('../Fixtures/recentActivity.js')
    }
  },

  getPlaylist: (groupId) => {
    return {
      ok: true,
      data: require('../Fixtures/playlist.js')(groupId)
    }
  },

  getMyGroups: () => {
    return {
      ok: true,
      data: require('../Fixtures/myGroups.js')
    }
  }
}
