<template>
  <div
    class="main-wrapper py-8 md:px-4 lg:py-0 lg:px-8 px-1 bg-c3-teal w-full min-h-full grid justify-center gap-y-8 gap-x-4 lg:gap-y-8 lg:gap-x-4 content-center relative  "
  >
    <div
      class=" lg:flex lg:gap-4 px-4 lg:px-0 row-start-1 col-start-1 lg:col-start-2 col-span-1  lg:row-start-2  lg:justify-self-end"
    >
      <title-xl class="h-auto w-auto md:w-64 lg:w-96 self-start" />
      <circular-message
        class="hidden lg:flex h-auto w-20 self-start animate-spin-slow"
      />
    </div>
    <div
      class="flex lg:hidden row-start-1 col-start-2 col-span-1 items-center gap-4"
    >
      <circles-group
        :color="getColor(currentCategory.color)"
        customDotClass="h-7 w-7 "
        :style="{ gap: '.1rem' }"
      />
      <div
        class="text-white font-bold text-2xl font-section uppercase relative"
        :style="{ width: '13ch' }"
        v-if="isCurrent(currentCategory.name)"
      >
        {{ currentCategory.label }}
        <p
          class="text-white text-lg font-sans font-normal absolute capitalize"
          v-if="!currentCategory.required"
        >
          *optional
        </p>
      </div>
    </div>
    <div
      class="hidden lg:flex lg:row-start-3 lg:col-start-2  lg:flex-col gap-2 items-start justify-self-end"
    >
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="flex gap-4 "
        :class="[index === 3 ? 'items-start' : 'items-center']"
      >
        <circles-group
          :color="getColor(category.color)"
          customDotClass="h-9 w-9 lg:h-6 lg:w-6 "
          :style="{ gap: '.1rem' }"
        />
        <div
          class="text-white font-bold text-4xl font-section uppercase relative"
          :style="{ width: '20ch' }"
          v-if="isCurrent(category.name)"
        >
          {{ category.label }}
          <p
            class="text-white text-lg font-sans font-normal absolute capitalize"
            :style="{ width: '20ch' }"
            v-if="!category.required"
          >
            *optional
          </p>
        </div>
      </div>
    </div>

    <video-selector-list
      :currentCategory="currentCategory"
      class="col-start-1 col-span-2 row-start-2 lg:col-start-3  lg:col-span-1 lg:row-span-3 lg:row-start-2 "
    />

    <footer
      class="relative flex justify-center row-start-3 col-span-2 lg:justify-between  lg:row-start-5 lg:col-start-1 lg:col-span-full  lg:py-7 "
    >
      <c3-logo class="hidden lg:flex height-auto w-28 " />

      <div class=" flex gap-8 items-center">
        <button
          class=" text-xl lg:text-2xl text-white py-2"
          @click="backCategory"
        >
          <button-arrow
            class="hidden lg:flex h-2 w-auto transform rotate-180"
          />
          <button-arrow-sm class="lg:hidden h-2 w-auto transform rotate-180 " />
          Back
        </button>
        <button
          class="bg-white  text-xl lg:text-2xl py-2 "
          @click="nextCategory"
          :class="{ 'text-gray-3 bg-gray-5': isDisabled }"
        >
          <button-arrow class="hidden lg:flex h-2 w-auto" />
          {{ currentCategory.name === "C3 Kids" ? "Finish" : "Next" }}
          <button-arrow-sm class="  lg:hidden h-2 w-auto " />
        </button>
        <transition name="slide-fade">
          <div
            v-if="showWarning"
            class="absolute -mt-12 lg:-mt-8 top-0 right-0  flex flex-row gap-1 lg:gap-2 text-left w-auto text-white bg-gray-1 shadow-lg p-3"
          >
            <warning-icon class=" h-auto lg:w-5 w-4" />
            <p class="font-bold text-xs lg:text-base">
              Select at least one video
            </p>
          </div>
        </transition>
      </div>
    </footer>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import VideoSelectorList from "@/components/VideoSelectorList";
import getVideos from "../videos.js";
import { mapState, mapMutations } from "vuex";
import titleXl from "@/assets/illustrations/adventure-title.svg";
import circularMessage from "@/assets/illustrations/circular-message.svg";
import c3Logo from "@/assets/illustrations/c3-logo.svg";
import buttonArrow from "@/assets/icons/button-arrow.svg?inline";
import buttonArrowSm from "@/assets/icons/button-arrow-sm.svg?inline";
import warningIcon from "@/assets/icons/warning.svg?inline";

import circlesGroup from "@/components/circlesGroup.vue";

export default {
  components: {
    VideoSelectorList,
    titleXl,
    circlesGroup,
    circularMessage,
    buttonArrow,
    buttonArrowSm,
    warningIcon,
    c3Logo,
  },
  data() {
    return {
      videoList: "",
      currentCategory: {},
      showWarning: false,
      timer: null,
    };
  },
  async created() {
    this.videoList = await getVideos();
    this.currentCategory = this.categories[0];
  },
  computed: {
    ...mapState(["videoPlaylist", "categories"]),
    videos() {
      return this.videoList[this.currentCategory.name];
    },
    isDisabled() {
      return (
        this.currentCategory.required &&
        this.videoPlaylist[this.currentCategory.name].length == 0
      );
    },
  },

  methods: {
    isCurrent(category) {
      if (category === this.currentCategory.name) {
        return true;
      }
      return false;
    },
    nextCategory() {
      if (this.isDisabled) {
        if (this.timer == null) {
          this.showWarning = true;
          this.timer = setTimeout(() => {
            this.showWarning = false;
            this.timer = null;
          }, 2000);
        }
        return;
      }
      const currentIndex = this.categories.indexOf(this.currentCategory);
      if (currentIndex < this.categories.length - 1) {
        this.currentCategory = this.categories[currentIndex + 1];
        window.scrollTo(0, 0);
      } else {
        const selectedVideoIds = Object.values(this.videoPlaylist).flat();
        const allIds = ["HFjLXj0pojg", ...selectedVideoIds];
        this.$router.push({
          path: "/play",
          query: {
            videos: allIds,
          },
        });
      }
    },
    backCategory() {
      const currentIndex = this.categories.indexOf(this.currentCategory);
      if (currentIndex > 0) {
        this.currentCategory = this.categories[currentIndex - 1];
      } else {
        this.resetPlaylist();
        this.$router.push({
          name: "Instructions",
        });
      }
    },
    getColor(color) {
      return `bg-${color} `;
    },
    ...mapMutations({ resetPlaylist: "RESET_PLAYLIST" }),
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  @screen md {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto;
  }
  @screen lg {
    grid-template-columns: 10px auto 5fr 10px;
    grid-template-rows: 1fr auto auto 1fr auto;
  }
}
.slide-fade-enter-active {
  transition: all 0.2s ease !important;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1) !important;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px) !important;
  opacity: 0 !important;
}
</style>
