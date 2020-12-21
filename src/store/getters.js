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
      HFjLXj0pojg: {
        title: "Introduction Video",
        id: "HFjLXj0pojg",
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
