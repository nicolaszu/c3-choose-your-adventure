export const mutations = {
  ADD_VIDEO(state, id) {
    state.videoPlaylist.push(id);
  },
  REMOVE_VIDEO(state, id) {
    state.videoPlaylist = state.videoPlaylist.filter((videoID) => {
      console.log(id !== videoID);
      return id !== videoID;
    });
  },
};
