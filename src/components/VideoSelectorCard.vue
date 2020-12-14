<template>
  <div
    class="rounded-lg card h-52  w-72 relative bg-white "
    :class="[{ 'border-4 ': isSelected }, getSelectedStyling()]"
    @click="toggleSelect"
  >
    <div
      v-if="isSelected"
      class="rounded-full bg-c3-orange h-8 w-8 absolute right-0 m-2"
    >
      <check-icon class="fill-current text-white" />
    </div>
    <div class="image-wrapper" v-if="thumbnail">
      <img :src="thumbnail" alt="video" class="" />
    </div>
    <div v-else class="image-wrapper" :rounded="true">
      <div
        class="animate-pulse bg-gray-5 absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        alt="video"
      />
    </div>
    <div class="py-3 px-3 flex justify-between">
      <p
        class="font-bold gray-700 text-left"
        :class="{ 'text-white': isSelected && category !== 'C3 Kids' }"
      >
        {{ title }}
      </p>
      <info-icon
        class="svg-20"
        :class="[
          isSelected && category !== 'C3 Kids' ? 'text-white' : 'text-gray-700',
        ]"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
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
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["videoPlaylist"]),
    ...mapGetters(["categoryColor"]),
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
    getSelectedStyling() {
      if (this.isSelected) {
        const color = this.categoryColor(this.category);
        const stylingString = `bg-${color} border-${color}`;
        return stylingString;
      }
    },
    async getThumbnail() {
      const HDavailable = await this.verifyHD();
      if (HDavailable) {
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

.image-wrapper {
  padding-bottom: 50%;
  @apply rounded-t-lg relative bg-white;
  img {
    @apply absolute top-0 left-0 w-full h-full object-cover rounded-t-lg;
  }
}
</style>
