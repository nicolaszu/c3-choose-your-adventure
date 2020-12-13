<template>
  <div id="app">
    <c3-header />
    <router-view />
  </div>
</template>

<script>
import c3Header from "./components/Header.vue";

export default {
  components: {
    c3Header,
  },
};
</script>

<style lang="scss">
#app {
  padding: 20px;
  height: calc(100vh - theme("spacing.16"));
  // height: -webkit-calc(100vh - 65px); /* google, safari */
  // height: -moz-calc(100vh - 65px); /* firefox */
}
</style>
