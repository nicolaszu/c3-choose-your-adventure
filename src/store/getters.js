export const getters = {
  playlistLength(state) {
    return state.videoPlaylist.length;
  },
  arrayCategories(state) {
    return state.categories.map((category) => {
      return category.name;
    });
  },
  categoryColor(state) {
    return (currentCategory) => {
      const selectedCategory = state.categories.filter(
        (category) => currentCategory === category.name
      );
      return selectedCategory[0].color;
    };
  },
  //returns array of objects of all videos rather than divided by categories
  allVideos(state) {
    const introVideo = {
      xZF4MxFzKlc: {
        title: "Introduction Video",
        id: "xZF4MxFzKlc",
        time: "1:52",
      },
    };
    const flattenVideos = Object.values(state.videosByCategory).flat();
    const normalizedMeta = flattenVideos.reduce(
      (obj, item) => ((obj[item.id] = item), obj),
      {}
    );
    return { ...introVideo, ...normalizedMeta };
  },
};
