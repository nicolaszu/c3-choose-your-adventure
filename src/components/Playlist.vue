<template>
  <perfect-scrollbar class="max-height flex flex-col gap-6 h-0 min-h-full pr-8">
    <div v-for="(video, index) in videos" :key="video.id">
      <div
        class="grid grid-cols-2 py-4 px-4 gap-4 card-wrapper rounded-lg hover:bg-gray-100 cursor-pointer"
      >
        <p>{{ index + 1 }}</p>
        <div class="image-wrapper">
          <img :src="getThumbnail(video.id)" :alt="video.id" />
        </div>

        <div class="flex flex-col gap-2">
          <p class="font-bold text-lg  ">{{ video.title }}</p>
          <p v-if="video.author" class="text-md  ">
            {{ video.author }}
          </p>
        </div>
        <p
          class="text-white bg-gray-1 px-3 py-1 rounded h-min font-bold text-xs"
        >
          1:23
        </p>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  props: {
    videoIds: {
      type: Array,
      required: true,
    },
    selectedId: {
      type: String,
    },
  },
  data() {
    return {
      videos: [],
    };
  },
  computed: {
    ...mapState(["videoPlaylist"]),
    ...mapGetters(["allVideos"]),
  },
  methods: {
    getThumbnail(id) {
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    },
    getVideoMetaDataList() {
      return this.allVideos.filter((video) => this.videoIds.includes(video.id));
    },
  },
  created() {
    this.videos = this.getVideoMetaDataList();
  },
};
</script>

<style lang="scss" scoped>
img {
  width: auto;
  height: auto;
  object-fit: cover;
}
.card-wrapper {
  height: fit-content;
  grid-template-columns: fit-content(10px) fit-content(10px) auto fit-content(
      10px
    );
  &:hover {
    .title {
      @apply text-blue-700;
    }
  }
}
.image-wrapper {
  @apply rounded-lg relative bg-white w-36	h-20;
  img {
    @apply absolute top-0 left-0 w-full h-full object-cover rounded-lg;
  }
}
.description {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
