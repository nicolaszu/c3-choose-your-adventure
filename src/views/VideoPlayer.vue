<template>
  <div class="home">
    {{ isLastVideo }}
    <youtube
      :video-id="urlPlaylist[playlistStartIndex]"
      ref="youtube"
      @playing="playing"
    ></youtube>
    <button @click="playVideo">play</button>
    <playlist />
    <button id="cast">hello</button>
    <ShareNetwork
      network="Email"
      :url="this.$route"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      Share on Facebook
    </ShareNetwork>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Playlist from "../components/Playlist.vue";
export default {
  name: "VideoPlayer",
  components: { Playlist },
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
  },
  computed: {
    ...mapState(["videoPlaylist"]),
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
