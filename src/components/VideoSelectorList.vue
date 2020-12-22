<template>
  <div class="relative" :class="{ 'outer-wrapper': !isAtScrollEnd }">
    <div
      @ps-y-reach-end="hideGradient"
      @ps-scroll-up="showGradient"
      class="hidden lg:grid main-wrapper gap-6 pr-8 h-0 min-h-full justify-center overflow-y-auto overflow-x-hidden"
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
    <div
      class="grid lg:hidden main-wrapper md:gap-6 gap-2  overflow-y-auto justify-center"
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
  grid-auto-rows: fit-content(100px);
  grid-template-columns: repeat(auto-fill, 11rem);

  @screen md {
    grid-template-columns: repeat(auto-fill, 18rem);
  }

  @screen lg {
    grid-template-columns: repeat(auto-fill, 14rem);
  }

  @screen xl {
    grid-template-columns: repeat(auto-fill, 18rem);
  }
}

// .outer-wrapper::after {
//   background: linear-gradient(
//     180deg,
//     rgba(162, 202, 212, 0) 0%,
//     rgba(162, 202, 212, 1) 100%
//   );
//   content: " ";
//   @apply absolute bottom-0 w-full z-50 left-0 h-12;
// }
/* Track */
::-webkit-scrollbar {
  width: 11px;
  height: 11px;
}

::-webkit-scrollbar-track {
  @apply rounded-lg bg-transparent;
}

/* Thumb */
::-webkit-scrollbar-thumb {
  @apply rounded-lg bg-white;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-50;
}

::-webkit-scrollbar-thumb:active {
  @apply bg-gray-50;
}

::-webkit-scrollbar-thumb:vertical {
  border-top: solid 2px white;
  border-bottom: solid 2px white;
}

::-webkit-scrollbar-thumb:horizontal {
  border-right: solid 2px white;
  border-left: solid 2px white;
}
/* Buttons */
::-webkit-scrollbar-button {
  background: no-repeat white;
  background-size: 0.75em;
  background-position: center bottom;
  @apply rounded-full h-3;
}

/* Up */
::-webkit-scrollbar-button:vertical:decrement {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z' fill='rgba(162,202,212,1)'/></svg>");
}

/* Down */
::-webkit-scrollbar-button:vertical:increment {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' fill='rgba(162,202,212,1)'/></svg>");
}

/* Turn on single button up on top, and down on bottom */
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
  display: block;
}

/* Turn off the down area up on top, and up area on bottom */
::-webkit-scrollbar-button:vertical:start:increment,
::-webkit-scrollbar-button:vertical:end:decrement {
  display: none;
}
</style>
