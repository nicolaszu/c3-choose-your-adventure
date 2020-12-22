<template>
  <div
    class="max-height flex flex-col  xl:h-0 xl:min-h-full xl:pr-8 gap-2 overflow-hidden xl:overflow-auto"
  >
    <div
      v-for="(id, index) in videoIds"
      :key="id"
      @click="changeVideo(index)"
      class="grid grid-cols-2 py-4 px-3 xl:p-4 gap-2 xl:gap-4 card-wrapper rounded-xl hover:bg-gray-100 cursor-pointer"
      :class="{ 'bg-gray-100': isSelected(id) }"
    >
      <p>{{ index + 1 }}</p>
      <div class="image-wrapper">
        <img :src="getThumbnail(id)" :alt="id" />
      </div>

      <div class="flex flex-col xl:gap-2 overflow-x-auto overflow-y-hidden">
        <p class="font-bold  xl:text-lg truncate overflow-ellipsis ">
          {{ allVideos[id].title }}
        </p>
        <p v-if="allVideos[id].author" class="text-lg">
          {{ allVideos[id].author }}
        </p>
      </div>
      <p
        class="text-white bg-gray-1 px-3 xl:py-1 rounded h-min font-bold text-xs"
      >
        1:23
      </p>
    </div>
  </div>
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
  computed: {
    ...mapState(["videoPlaylist"]),
    ...mapGetters(["allVideos"]),
  },
  methods: {
    getThumbnail(id) {
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    },

    isSelected(id) {
      return id === this.selectedId;
    },
    changeVideo(index) {
      this.$emit("videoClicked", index);
    },
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
  grid-template-columns: auto auto 1fr auto;

  &:hover {
    .title {
      @apply text-blue-700;
    }
  }
}
.image-wrapper {
  @apply rounded-lg relative bg-white w-20	h-12;
  img {
    @apply absolute top-0 left-0 w-full h-full object-cover rounded-lg;
  }
  @screen xl {
    @apply w-36	h-20;
  }
}
.description {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
/* Track */
::-webkit-scrollbar {
  width: 11px;
  height: 11px;
}

::-webkit-scrollbar-track {
  @apply rounded-lg bg-transparent;
}

/* Thumb */
::-webkit-scrollbar-thumb {
  @apply rounded-lg bg-white;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-50;
}

::-webkit-scrollbar-thumb:active {
  @apply bg-gray-50;
}

::-webkit-scrollbar-thumb:vertical {
  border-top: solid 2px white;
  border-bottom: solid 2px white;
}

::-webkit-scrollbar-thumb:horizontal {
  border-right: solid 2px white;
  border-left: solid 2px white;
}
/* Buttons */
::-webkit-scrollbar-button {
  background: no-repeat white;
  background-size: 0.75em;
  background-position: center bottom;
  @apply rounded-full h-3;
}

/* Up */
::-webkit-scrollbar-button:vertical:decrement {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z' fill='rgba(162,202,212,1)'/></svg>");
}

/* Down */
::-webkit-scrollbar-button:vertical:increment {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' fill='rgba(162,202,212,1)'/></svg>");
}

/* Turn on single button up on top, and down on bottom */
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
  display: block;
}

/* Turn off the down area up on top, and up area on bottom */
::-webkit-scrollbar-button:vertical:start:increment,
::-webkit-scrollbar-button:vertical:end:decrement {
  display: none;
}
</style>
