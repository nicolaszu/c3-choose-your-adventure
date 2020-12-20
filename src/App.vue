<template>
  <div id="app" class="md:p-5">
    <c3-header class="hidden md:flex" />
    <mobile-c3-header class="flex md:hidden" />
    <router-view />
  </div>
</template>

<script>
import c3Header from "./components/Header.vue";
import mobileC3Header from "./components/HeaderMobile.vue";

export default {
  components: {
    c3Header,
    mobileC3Header,
  },
};
</script>

<style lang="scss">
#app {
  height: calc(100% - theme("spacing.16"));
  // height: -webkit-calc(100vh - 65px); /* google, safari */
  // height: -moz-calc(100vh - 65px); /* firefox */
}
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
</style>
