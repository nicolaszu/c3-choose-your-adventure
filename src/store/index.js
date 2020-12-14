import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

export const defaultState = () => {
  return {
    videoPlaylist: [],
    worshipSelection: [],
    storySelection: [],
    kidsSelection: [],
    preachSelection: [],
    categories: [
      {
        color: "c3-green",
        label: "Select your worship",
        name: "Worship",
      },
      {
        color: "c3-orange",
        label: "Select your story",
        name: "Our Story",
      },
      {
        color: "c3-red",
        label: "Select your preach",
        name: "Preach",
      },
      {
        color: "c3-beige",
        label: "Select your c3 kids episode",
        name: "C3 Kids",
      },
    ],
  };
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: defaultState(),
  mutations: mutations,
  getters: getters,
  actions: actions,
});
