<template>
  <div class="relative" :class="{ 'outer-wrapper': !isAtScrollEnd }">
    <perfect-scrollbar
      @ps-y-reach-end="hideGradient"
      @ps-scroll-up="showGradient"
      class="hidden md:grid main-wrapper gap-6 pr-8 h-0 min-h-full justify-center "
    >
      <video-selector-card
        v-for="(video, index) in videos"
        :key="currentCategory.name + '' + index"
        :id="video.id"
        :videoMeta="video"
        :category="currentCategory.name"
        class="col-span-1 row-span-1"
      />
    </perfect-scrollbar>
    <div
      class="grid md:hidden main-wrapper gap-6  overflow-y-auto justify-center"
    >
      <video-selector-card
        v-for="(video, index) in videos"
        :key="currentCategory.name + '' + index"
        :id="video.id"
        :videoMeta="video"
        :category="currentCategory.name"
        class="col-span-1 row-span-1"
      />
    </div>
  </div>
</template>

<script>
import VideoSelectorCard from "../components/VideoSelectorCard";
import { mapState } from "vuex";

export default {
  components: {
    VideoSelectorCard,
  },

  props: {
    currentCategory: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isAtScrollEnd: false,
    };
  },

  computed: {
    ...mapState(["videoPlaylist", "videosByCategory"]),
    videos() {
      return this.videosByCategory[this.currentCategory.name];
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
  grid-template-columns: repeat(auto-fill, 18rem);
  grid-auto-rows: fit-content(100px);
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
