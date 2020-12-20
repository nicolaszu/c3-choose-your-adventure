<template>
  <div
    class="main-wrapper py-8 md:py-0 md:px-8 px-4 bg-c3-teal w-full min-h-full grid justify-center gap-y-8 gap-x-4 md:gap-y-8 md:gap-x-4 content-center relative  "
  >
    <div
      class=" md:flex md:gap-4 row-start-1 col-start-1 md:col-start-2 col-span-1  md:row-start-2  md:justify-self-end"
    >
      <title-xl class="h-auto w-auto md:w-96 self-start" />
      <circular-message
        class="hidden md:flex h-auto w-20 self-start animate-spin-slow"
      />
    </div>
    <div
      class="flex md:hidden row-start-1 col-start-2 col-span-1 items-center gap-4"
    >
      <circles-group
        :color="getColor(currentCategory.color)"
        customDotClass="h-7 w-7 "
        :style="{ gap: '.1rem' }"
      />
      <div
        class="text-white font-bold text-2xl font-section uppercase relative"
        :style="{ width: '10ch' }"
        v-if="isCurrent(currentCategory.name)"
      >
        {{ currentCategory.label }}
        <p
          class="text-white text-lg font-sans font-normal absolute capitalize"
          :style="{ width: '20ch' }"
          v-if="!currentCategory.required"
        >
          *optional
        </p>
      </div>
    </div>
    <div
      class="hidden md:flex md:row-start-3 md:col-start-2  md:flex-col gap-2 items-start justify-self-end"
    >
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="flex gap-4 items-center"
      >
        <circles-group
          :color="getColor(category.color)"
          customDotClass="h-9 w-9 md:h-6 md:w-6 "
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
      class="col-start-1 col-span-2 row-start-2 md:col-start-3  md:col-span-1 md:row-span-3 md:row-start-2 "
    />

    <footer
      class="flex justify-center row-start-3 col-span-2 md:justify-between  md:row-start-5 md:col-start-1 md:col-span-full  md:py-7 md:px-10"
    >
      <c3-logo class="hidden md:flex height-auto w-28 " />

      <div class=" flex gap-8 items-center">
        <button
          class=" text-xl md:text-2xl text-white py-2"
          @click="backCategory"
        >
          <button-arrow
            class="hidden md:flex h-2 w-auto transform rotate-180"
          />
          <button-arrow-sm class="md:hidden h-2 w-auto transform rotate-180 " />
          Back
        </button>
        <popover :onHover="true" :disabled="!isDisabled">
          <template #trigger>
            <button
              class="bg-white  text-xl md:text-2xl py-2 disabled:text-gray-3 disabled:bg-gray-5"
              @click="nextCategory"
              :disabled="isDisabled"
            >
              <button-arrow class="hidden md:flex h-2 w-auto" />
              {{ currentCategory.name === "C3 Kids" ? "Finish" : "Next" }}
              <button-arrow-sm class="  md:hidden h-2 w-auto " />
            </button>
          </template>
          <template #popover>
            <div
              class="flex flex-row gap-2 text-left w-auto text-white bg-gray-1 shadow-md p-3"
            >
              <warning-icon class="svg-20" />
              <p class="font-bold">Select at least one video</p>
            </div>
          </template>
        </popover>
      </div>
    </footer>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import VideoSelectorList from "@/components/VideoSelectorList";
import getVideos from "../videos.js";
import { mapState } from "vuex";
import titleXl from "@/assets/illustrations/adventure-title.svg";
import circularMessage from "@/assets/illustrations/circular-message.svg";
import c3Logo from "@/assets/illustrations/c3-logo.svg";
import buttonArrow from "@/assets/icons/button-arrow.svg?inline";
import buttonArrowSm from "@/assets/icons/button-arrow-sm.svg?inline";
import warningIcon from "@/assets/icons/warning.svg?inline";

import circlesGroup from "@/components/circlesGroup.vue";
import Popover from "@/components/Popover";

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
    Popover,
  },
  data() {
    return {
      videoList: "",
      currentCategory: {},
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
      console.log(category, this.currentCategory);
      if (category === this.currentCategory.name) {
        return true;
      }
      return false;
    },
    nextCategory() {
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
        this.$router.push({
          name: "Instructions",
        });
      }
    },
    getColor(color) {
      return `bg-${color} `;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  @screen md {
    grid-template-columns: 10px auto 5fr 10px;
    grid-template-rows: 1fr auto auto 1fr auto;
  }
}
</style>
