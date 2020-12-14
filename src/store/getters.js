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
      console.log(selectedCategory);
      return selectedCategory[0].color;
    };
  },
};
