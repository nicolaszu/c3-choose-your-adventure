<template>
  <div>
    {{ videoPlaylist }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["videoPlaylist"]),
  },
};
</script>

<style></style>
