<template>
  <div
    class="main-wrapper bg-c3-teal w-full h-full grid justify-center gap-y-2 gap-x-16 content-center relative px-16 "
  >
    <div class="flex flex-col gap-16 self-center row-start-2">
      <title-xl class="h-auto w-48 self-start" />
      <div class="flex gap-2">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="flex  gap-4 items-center"
        >
          <circles-group
            v-if="index < 3"
            :color="getColor(category.color)"
            size="6"
            :style="{ gap: '.1rem' }"
          />
        </div>
      </div>
    </div>
    <div
      class="relative w-full h-0 row-start-2"
      :style="{ 'padding-bottom': '56.25%' }"
    >
      <youtube
        class="absolute top-0 left-0 w-full h-full"
        :video-id="urlPlaylist[playlistStartIndex]"
        ref="youtube"
        @playing="playing"
      ></youtube>
    </div>

    <div
      class="flex justify-between items-center pb-2 row-start-1 col-start-3 col-span-1"
      :class="{ 'flex-col row-start-2 self-center': !showPlaylist }"
    >
      <button
        class="flex text-center items-center gap-2 group"
        @click="showPlaylist = !showPlaylist"
      >
        {{ showPlaylist ? "Hide Selection" : "Show Selection" }}
        <slide-icon
          class="svg-16"
          :class="{ 'transform rotate-180': !showPlaylist }"
        />
      </button>
      <p>Total Play Time: <strong>1:53</strong></p>
    </div>
    <playlist
      v-if="showPlaylist"
      class="row-start-2 max-w-md"
      :videoIds="urlPlaylist"
      :selectedId="this.urlPlaylist[this.playlistCurrentIndex]"
      @videoClicked="changeVideo"
    />
    <div
      class="flex justify-between  col-start-2 col-span-1 row-start-3 items-center  bottom-0 my-7 mx-10 w-full "
    >
      <router-link
        :to="{ name: 'Instructions' }"
        tag="button"
        class="flex text-center py-2 items-center gap-2 group"
        @click.native="resetPlaylist"
      >
        <refresh-icon class="svg-24 group-hover:animate-spin-slow" />
        Create a New Adventure
      </router-link>
      <c3-logo class=" height-auto w-28 " />
      <button
        class="flex text-center items-center gap-2 bg-white py-2 items-center"
      >
        Share your Adventure
        <share-icon class="svg-24" />
      </button>
    </div>
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
import { mapState, mapMutations } from "vuex";
import titleXl from "@/assets/illustrations/adventure-title.svg";
import c3Logo from "@/assets/illustrations/c3-logo.svg";
import circlesGroup from "@/components/circlesGroup.vue";
import Playlist from "../components/Playlist.vue";
import shareIcon from "@/assets/icons/share.svg";
import refreshIcon from "@/assets/icons/refresh.svg";
import slideIcon from "@/assets/icons/slide.svg";

export default {
  name: "VideoPlayer",
  components: {
    Playlist,
    c3Logo,
    circlesGroup,
    titleXl,
    shareIcon,
    refreshIcon,
    slideIcon,
  },
  data() {
    return {
      playlistStartIndex: 0,
      playlistCurrentIndex: 0,
      urlPlaylist: [],
      showPlaylist: true,
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
        this.player.loadVideoById(this.getNextVideo(), 0, "large");
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
    ...mapMutations({ resetPlaylist: "RESET_PLAYLIST" }),
    changeVideo(newIndex) {
      if (newIndex === this.playlistCurrentIndex) {
        return;
      }
      this.playlistCurrentIndex = newIndex - 1;
      this.player.loadVideoById(this.getNextVideo(), 0, "large");
      this.player.playVideo();
    },
  },
  computed: {
    ...mapState(["videoPlaylist", "categories"]),
    player() {
      return this.$refs.youtube.player;
    },
    isLastVideo() {
      return this.urlPlaylist.length === this.playlistCurrentIndex + 1;
    },
  },
};
</script>
<style lang="scss" scoped>
.main-wrapper {
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto auto;
}

::v-deep iframe {
  @apply rounded-lg;
}
</style>
