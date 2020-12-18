import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueYoutube from "vue-youtube";
import "./assets/index.scss";
import VueSocialSharing from "vue-social-sharing";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "./assets/perfect-scrollbar.scss";
import VueContentPlaceholders from "vue-content-placeholders";
import VueClipboard from "vue-clipboard2";

Vue.use(VueContentPlaceholders);
Vue.use(PerfectScrollbar);
Vue.use(VueSocialSharing);

Vue.use(VueClipboard);
Vue.use(VueYoutube);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
