<template>
  <div class="bg">
    {{ currentCategorie }}
    <video-selector-list :currentCategorie="currentCategorie" class="ml-96" />
    <button @click="navigate">
      Submit
    </button>
    <button @click="backCategory" :disabled="currentCategorie === 'Worship'">
      Back
    </button>
    <button @click="nextCategory">
      Next
    </button>
    {{ currentCategorie }}
  </div>
</template>

<script>
// import { mapState } from "vuex";
import VideoSelectorList from "@/components/VideoSelectorList";
import getVideos from "../videos.js";
import { mapState } from "vuex";
export default {
  components: { VideoSelectorList },
  data() {
    return {
      videoList: "",
      currentCategorie: "Worship",
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

  methods: {
    navigate() {
      this.$router.push({
        path: "/play",
        query: {
          videos: this.videoPlaylist,
        },
      });
    },
    nextCategory() {
      const currentIndex = this.videoCategories.indexOf(this.currentCategorie);
      if (currentIndex < this.videoCategories.length - 1) {
        this.currentCategorie = this.videoCategories[currentIndex + 1];
      } else {
        this.navigate();
      }
    },
    backCategory() {
      const currentIndex = this.videoCategories.indexOf(this.currentCategorie);
      if (currentIndex > 0) {
        this.currentCategorie = this.videoCategories[currentIndex - 1];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background: rgba(162, 202, 212, 1);
}
</style>
