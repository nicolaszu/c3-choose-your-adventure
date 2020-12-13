<template>
  <div class="home">
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    <button @click="playVideo">play</button>

    <button id="cast">hello</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      videoId: "lJlEQim-yMo",
    };
  },
  mounted() {
    this.player.addEventListener("onStateChange", this.onytplayerStateChange);
    const cjs = new Castjs();
    console.log(cjs);
    // Wait for user interaction
    document.getElementById("cast").addEventListener("click", function() {
      // Check if casting is available
      if (cjs.available) {
        // Initiate new cast session
        console.log("new casting aviable");
        cjs.cast(`https://www.youtube.com/watch?v=${this.videoId}`);
        cjs.play();
      }
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
      console.log(newState);

      if (newState.data === 0) {
        this.player.loadVideoById("bHQqvYy5KYo", 5, "large");
        this.player.playVideo();
      }
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>
