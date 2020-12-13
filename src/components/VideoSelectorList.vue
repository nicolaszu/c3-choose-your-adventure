<template>
  <div class="relative wrapper">
    <div class="max-height grid gap-4 grid-cols-3 overflow-y-auto relative ">
      <video-selector-card
        v-for="(video, index) in videos"
        :key="currentCategorie + '' + index"
        :id="video.id"
        :title="video.title"
      />
    </div>
  </div>
</template>

<script>
import getVideos from "../videos.js";
import VideoSelectorCard from "../components/VideoSelectorCard";
import { mapState } from "vuex";

export default {
  components: {
    VideoSelectorCard,
  },

  props: {
    currentCategorie: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      videoList: "",
    };
  },
  async created() {
    this.videoList = await getVideos();
  },
  computed: {
    ...mapState(["videoPlaylist", "videoCategories"]),
    videos() {
      return this.videoList[this.currentCategorie];
    },
  },
};
</script>

<style lang="scss" scoped>
.max-height {
  max-height: 45rem;
}

.wrapper::after {
  background: linear-gradient(
    180deg,
    rgba(162, 202, 212, 0) 0%,
    rgba(162, 202, 212, 1) 100%
  );
  content: " ";
  @apply absolute bottom-0 w-full z-50 left-0 h-48;
}
</style>
