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
    videoCategories: ["Worship", "Our Story", "Preach", "C3 Kids"],
  };
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: defaultState(),
  mutations: mutations,
  getters: getters,
  actions: actions,
});
