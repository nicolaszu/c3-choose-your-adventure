export const mutations = {
  ADD_VIDEO(state, { category, id }) {
    state.videoPlaylist[category].push(id);
  },
  REMOVE_VIDEO(state, { category, id }) {
    state.videoPlaylist[category] = state.videoPlaylist[category].filter(
      (videoID) => {
        return id !== videoID;
      }
    );
  },
  RESET_PLAYLIST(state) {
    state.videoPlaylist = {
      Worship: [],
      "Our Story": [],
      Preach: [],
      "C3 Kids": [],
    };
  },
};
