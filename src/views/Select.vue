<template>
  <div
    class="main-wrapper bg-c3-teal w-full h-full grid justify-center gap-y-8 gap-x-16 content-center relative px-8 "
  >
    <div class="col-start-1 col-span-1 flex gap-4 justify-self-end">
      <title-xl class="h-auto w-96 self-start" />
      <circular-message class="h-auto w-20 self-start animate-spin-slow" />
    </div>
    <div
      class="col-start-1 row-start-2 flex flex-col gap-2 items-start justify-self-end"
    >
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="flex gap-4 items-center"
      >
        <circles-group
          :color="getColor(category.color)"
          size="6"
          :style="{ gap: '.1rem' }"
        />
        <p
          class="text-white font-bold text-4xl font-section uppercase"
          :style="{ width: '20ch' }"
          v-if="isCurrent(category.name)"
        >
          {{ category.label }}
        </p>
      </div>
    </div>

    <video-selector-list
      :currentCategory="currentCategory"
      class="col-start-2 row-span-2 "
    />

    <c3-logo class="absolute bottom-0 left-0 height-auto w-28 my-7 mx-10" />

    <div class="absolute bottom-0 my-7 mx-10 right-0 flex gap-8">
      <button class="text-2xl text-white py-2" @click="backCategory">
        <button-arrow class="h-2 w-auto transform rotate-180" />
        Back
      </button>
      <button
        class="bg-white text-2xl py-2 disabled:text-gray-3 disabled:bg-gray-5"
        @click="nextCategory"
      >
        <button-arrow class="h-2 w-auto" />
        {{ currentCategory.name === "C3 Kids" ? "Finish" : "Next" }}
      </button>
    </div>
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
import circlesGroup from "@/components/circlesGroup.vue";
export default {
  components: {
    VideoSelectorList,
    titleXl,
    circlesGroup,
    circularMessage,
    buttonArrow,
    c3Logo,
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
      } else {
        this.$router.push({
          path: "/play",
          query: {
            videos: this.videoPlaylist,
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
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}
</style>
