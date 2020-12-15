<template>
  <div
    class="main-wrapper bg-c3-teal w-full h-full grid justify-center gap-y-8 gap-x-16 content-center relative px-8 "
  >
    <div class="flex flex-col gap-16">
      <title-xl class="h-auto w-48 self-start" />
      <div class="flex gap-2">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="flex  gap-4 items-center"
        >
          <circles-group
            :color="getColor(category.color)"
            size="6"
            :style="{ gap: '.1rem' }"
          />
        </div>
      </div>
    </div>
    <youtube
      :video-id="urlPlaylist[playlistStartIndex]"
      ref="youtube"
      @playing="playing"
    ></youtube>
    <!-- <button @click="playVideo">play</button> -->
    <playlist :videoIds="urlPlaylist" />
    <c3-logo />
    <!-- <button id="cast">hello</button> -->
    <!-- <ShareNetwork
      network="Email"
      :url="this.$route.path"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      Share on Facebook
    </ShareNetwork> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import titleXl from "@/assets/illustrations/adventure-title.svg";
import c3Logo from "@/assets/illustrations/c3-logo.svg";
import circlesGroup from "@/components/circlesGroup.vue";
import Playlist from "../components/Playlist.vue";
export default {
  name: "VideoPlayer",
  components: { Playlist, c3Logo, circlesGroup, titleXl },
  data() {
    return {
      playlistStartIndex: 0,
      playlistCurrentIndex: 0,
      urlPlaylist: [],
    };
  },
  created() {
    this.playlistCurrentIndex = this.playlistStartIndex;
    this.urlPlaylist = this.$route.query.videos;
  },
  mounted() {
    this.player.addEventListener("onStateChange", this.onytplayerStateChange);
    console.log(this.$refs.youtube.style, this.$refs.youtube);
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("/ we are watching!!!");
    },
    onytplayerStateChange(newState) {
      console.log(newState);

      if (newState.data === 0 && !this.isLastVideo) {
        this.player.loadVideoById(this.getNextVideo(), 5, "large");
        this.player.playVideo();
      }
    },
    getNextVideo() {
      this.playlistCurrentIndex++;
      return this.urlPlaylist[this.playlistCurrentIndex];
    },
    getColor(color) {
      return `bg-${color} `;
    },
  },
  computed: {
    ...mapState(["videoPlaylist", "categories"]),
    ...mapGetters(["playlistLength"]),
    player() {
      return this.$refs.youtube.player;
    },
    isLastVideo() {
      return this.playlistLength === this.playlistCurrentIndex + 1;
    },
  },
};
</script>
<style lang="scss" scoped>
.main-wrapper {
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
}

::v-deep #widget2 {
  @apply rounded-lg;
}
</style>
