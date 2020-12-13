<template>
  <div
    class="rounded-lg card h-80  w-80 relative bg-white "
    :class="{ 'border-4 border-c3-orange bg-c3-orange': isSelected }"
    @click="toggleSelect"
  >
    <div
      v-if="isSelected"
      class="rounded-full bg-c3-orange h-8 w-8 absolute right-0 m-2"
    >
      <check-icon class="fill-current text-white" />
    </div>
    <img :src="thumbnail" alt="video" class=" rounded-t-lg h-auto w-full " />
    <div class="py-3 px-3 flex justify-between">
      <p
        class="font-bold gray-700 text-left"
        :class="{ 'text-white': isSelected }"
      >
        {{ title }}
      </p>
      <info-icon
        class="svg-20"
        :class="[isSelected ? 'text-white' : 'text-gray-700']"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import checkIcon from "@/assets/icons/check.svg?inline";
import infoIcon from "@/assets/icons/info.svg?inline";

export default {
  components: {
    checkIcon,
    infoIcon,
  },
  data() {
    return {
      thumbnail: "",
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["videoPlaylist"]),
    isSelected() {
      return this.videoPlaylist.includes(this.id);
    },
  },
  async created() {
    await this.getThumbnail();
  },
  methods: {
    toggleSelect() {
      if (this.isSelected) {
        this.removeVideo(this.id);
      } else {
        this.addVideo(this.id);
      }
    },
    async getThumbnail() {
      console.log("here1");

      const HDavailable = await this.verifyHD();
      console.log(HDavailable);
      if (HDavailable) {
        console.log("nice");

        this.thumbnail = `https://img.youtube.com/vi/${this.id}/maxresdefault.jpg`;
      } else {
        this.thumbnail = `https://img.youtube.com/vi/${this.id}/hqdefault.jpg`;
      }
    },
    verifyHD() {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => {
          if (img.width === 120) {
            resolve(false);
          } else {
            resolve(true);
          }
        };
        img.onerror = () => {
          console.log("error");
          reject;
        };
        img.src = `https://img.youtube.com/vi/${this.id}/maxresdefault.jpg`;
      });
    },
    ...mapMutations({ addVideo: "ADD_VIDEO", removeVideo: "REMOVE_VIDEO" }),
  },
};
</script>

<style lang="scss" scoped>
.card {
  // @apply shadow-lg;

  // box-shadow: 0px 16px 24px 0px rgba(255, 85, 44, 0.13);

  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);

  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);

  box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.06);
}

img {
}
</style>
