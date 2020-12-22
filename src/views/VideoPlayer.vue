<template>
  <div
    class="main-wrapper bg-c3-teal w-full min-h-full grid justify-center gap-y-8 xl:gap-y-2 xl:gap-x-16 content-center relative pb-6 xl:pb-0 xl:px-16 "
  >
    <div
      class="flex flex-row gap-4 md:flex-col xl:gap-16 self-center md:self-start xl:self-center justify-center md:justify-self-center xl:justify-start row-start-2 col-start-2 md:row-start-3 xl:col-span-1 xl:col-start-1 xl:row-start-2"
    >
      <title-xl class="h-auto w-36 md:w-64 xl:w-48 self-start" />
      <div class="flex gap-2">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="flex  gap-4 items-center"
        >
          <circles-group
            v-if="index < 3"
            :color="getColor(category.color)"
            customDotClass="h-5 w-5 xl:h-6 xl:w-6"
            size="6"
            :style="{ gap: '.1rem' }"
          />
        </div>
      </div>
    </div>
    <div
      class="sticky youtube-class top-0 pb md:static  z-50 xl:z-0 w-full md:w-auto h-0 row-start-1 col-start-1 col-span-full md:col-span-2 md:col-start-2 md:row-start-2 xl:col-span-1 xl:col-start-2 xl:row-start-2 "
    >
      <youtube
        class="absolute top-0 left-0 w-full h-full"
        :video-id="urlPlaylist[playlistStartIndex]"
        ref="youtube"
        @playing="playing"
      ></youtube>
    </div>
    <div
      class="hidden xl:flex justify-between items-center pb-2 xl:row-start-1  xl:col-start-3 xl:col-span-1"
      :class="{ 'flex-col xl:row-start-2 self-center': !showPlaylist }"
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
      v-if="showPlaylist || isMobile"
      class="row-start-4 col-start-2 md:col-start-3 md:row-start-3 xl:col-start-3 xl:row-start-2 xl:max-w-lg"
      :videoIds="urlPlaylist"
      :selectedId="this.urlPlaylist[this.playlistCurrentIndex]"
      @videoClicked="changeVideo"
    />
    <footer
      class="flex flex-wrap-reverse md:row-start-2 md:col-start-2 md:col-span-2  xl:flex-row justify-center row-start-3 col-start-2  xl:col-start-1 xl:col-span-full xl:row-start-3 items-center  bottom-0 xl:my-7  w-full "
    >
      <button
        class="flex text-center py-2 mr-8 items-center group text-sm xl:text-base"
        @click="showWarningModal = true"
      >
        <refresh-icon class="svg-20 xl:svg-24 mr-2 group-hover:animate-spin-slow" />
        Create a New Adventure
      </button>
      <c3-logo class="hidden xl:flex h-14 w-28 mr-8" />
      <button
        class="flex text-center items-center gap-2 bg-white py-2 items-center text-sm xl:text-base"
        @click="showCopyModal = true"
      >
        Share your Adventure
        <share-icon class="svg-20 xl:svg-24" />
      </button>
    </footer>
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
    <share-link-modal v-if="showCopyModal" @close="showCopyModal = false" />
    <warning-modal
      v-if="showWarningModal"
      @close="showWarningModal = false"
      @confirm="restartAdventure"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import circlesGroup from "@/components/circlesGroup.vue";
import Playlist from "../components/Playlist.vue";
import ShareLinkModal from "@/components/modals/ShareLinkModal.vue";
import WarningModal from "@/components/modals/WarningModal.vue";
import shareIcon from "@/assets/icons/share.svg";
import refreshIcon from "@/assets/icons/refresh.svg";
import slideIcon from "@/assets/icons/slide.svg";
import titleXl from "@/assets/illustrations/adventure-title.svg";
import c3Logo from "@/assets/illustrations/c3-logo.svg";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
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
    ShareLinkModal,
    WarningModal,
  },
  data() {
    return {
      playlistStartIndex: 0,
      playlistCurrentIndex: 0,
      urlPlaylist: [],
      showPlaylist: false,
      showCopyModal: false,
      showWarningModal: false,
      windowWidth: window.innerWidth,
    };
  },
  created() {
    this.playlistCurrentIndex = this.playlistStartIndex;
    this.urlPlaylist = this.$route.query.videos;
  },
  mounted() {
    this.player.addEventListener("onStateChange", this.onytplayerStateChange);
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
    this.$nextTick(() => {
      this.playVideo();
    });
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("/ we are watching!!!");
    },
    onytplayerStateChange(newState) {
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
      window.scrollTo(0, 0);
      this.player.loadVideoById(this.getNextVideo(), 0, "large");
      this.player.playVideo();
    },
    restartAdventure() {
      this.resetPlaylist();
      this.$router.push({ name: "Instructions" });
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
    isMobile() {
      return this.windowWidth <= parseInt(fullConfig.theme.screens.xl);
    },
  },
};
</script>
<style lang="scss" scoped>
.main-wrapper {
  grid-template-columns: 10px 1fr 10px;
  grid-template-rows: auto auto auto 1fr;
  @screen md {
    grid-template-columns: 3.5rem 1fr 1fr 3.5rem;
    grid-template-rows: auto auto 1fr;
  }
  @screen xl {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
  }
}

::v-deep iframe {
  @screen lg {
    @apply rounded-lg;
  }
}

.youtube-class{
  padding-bottom:56.25%;
  top: 4rem;
  @screen md{
    top:0;
    padding-bottom:0;
  }
}
</style>
