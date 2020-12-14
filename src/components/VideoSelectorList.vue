<template>
  <div class="relative" :class="{ 'outer-wrapper': !isAtScrollEnd }">
    <perfect-scrollbar
      @ps-y-reach-end="hideGradient"
      @ps-scroll-up="showGradient"
      class="max-height grid main-wrapper gap-6 grid-cols-3 pr-8 h-0 min-h-full "
    >
      <video-selector-card
        v-for="(video, index) in videos"
        :key="currentCategory + '' + index"
        :id="video.id"
        :title="video.title"
        :category="currentCategory"
      />
    </perfect-scrollbar>
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
    currentCategory: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      videoList: "",
      isAtScrollEnd: false,
    };
  },
  async created() {
    this.videoList = await getVideos();
  },
  computed: {
    ...mapState(["videoPlaylist"]),
    videos() {
      return this.videoList[this.currentCategory];
    },
  },
  methods: {
    hideGradient() {
      this.isAtScrollEnd = true;
    },
    showGradient() {
      if (this.isAtScrollEnd) {
        this.isAtScrollEnd = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.max-height {
  max-height: 45rem;
}

.main-wrapper {
  grid-template-columns: repeat(3, fit-content(10px));
}

.outer-wrapper::after {
  background: linear-gradient(
    180deg,
    rgba(162, 202, 212, 0) 0%,
    rgba(162, 202, 212, 1) 100%
  );
  content: " ";
  @apply absolute bottom-0 w-full z-50 left-0 h-12;
}
</style>
