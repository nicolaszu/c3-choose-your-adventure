<template>
  <div
    class="rounded-lg ring-4 card h-52  w-44 md:w-72 lg:w-48 xl:w-72 relative bg-white "
    :class="[{ 'border-4 ': isSelected }, getSelectedStyling()]"
    @click="toggleSelect"
  >
    <div
      v-if="isSelected"
      class=" z-50 rounded-full  h-8 w-8 absolute right-0 m-2"
      :class="[getSelectedStyling()]"
    >
      <check-icon
        class="fill-current "
        :class="[category === 'C3 Kids' ? 'text-black' : 'text-white']"
      />
    </div>
    <div class="image-wrapper relative" v-if="thumbnail">
      <img :src="thumbnail" alt="video" class="" />
      <p
        class="absolute bottom-0 right-0 m-2 bg-gray-1 px-3 rounded-md text-white font-bold text-sm"
      >
        {{ videoMeta.time }}
      </p>
    </div>
    <div v-else class="image-wrapper" :rounded="true">
      <div
        class="animate-pulse bg-gray-5 absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        alt="video"
      />
    </div>
    <div class="py-3 px-3 flex justify-between">
      <div class="flex flex-col truncate overflow-x-auto">
        <p
          class="font-bold gray-700 text-left truncate text-sm md:text-base "
          :class="{ 'text-white': isSelected && category !== 'C3 Kids' }"
        >
          {{ videoMeta.title }}
        </p>

        <p
          class="gray-700 text-left text-sm md:text-base"
          :class="{ 'text-white': isSelected && category !== 'C3 Kids' }"
        >
          {{ videoMeta.author }}
        </p>
      </div>
      <button class=" flex md:hidden p-0 items-start">
        <info-icon
          v-if="videoMeta.description"
          @click.stop=""
          @click="showDescriptionModal = true"
          class="svg-20 "
          :class="[
            isSelected && category !== 'C3 Kids'
              ? 'text-white'
              : 'text-gray-700',
          ]"
        />
      </button>
      <popover
        v-if="videoMeta.description"
        :onHover="true"
        @click.stop=""
        class="hidden md:flex"
      >
        <template #trigger>
          <info-icon
            class="svg-20"
            :class="[
              isSelected && category !== 'C3 Kids'
                ? 'text-white'
                : 'text-gray-700',
            ]"
          />
        </template>
        <template #popover>
          <div
            class="flex flex-col gap-1 text-left w-auto text-white bg-gray-1 shadow-md rounded-lg popover-content p-2"
          >
            <p class="font-bold">{{ videoMeta.title }}</p>
            <p v-if="videoMeta.author">{{ videoMeta.author }}</p>
            {{ videoMeta.description }}
          </div>
        </template>
      </popover>
    </div>
    <videoDescriptionModal
      :videoMeta="videoMeta"
      v-if="showDescriptionModal"
      @close="showDescriptionModal = false"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import checkIcon from "@/assets/icons/check.svg?inline";
import infoIcon from "@/assets/icons/info.svg?inline";
import Popover from "@/components/Popover";
import videoDescriptionModal from "@/components/modals/videoDescriptionModal";

export default {
  components: {
    checkIcon,
    infoIcon,
    Popover,
    videoDescriptionModal,
  },
  data() {
    return {
      thumbnail: "",
      showDescriptionModal: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    videoMeta: {
      type: Object,
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
      return this.videoPlaylist[this.category].includes(this.id);
    },
  },
  async created() {
    await this.getThumbnail();
  },
  methods: {
    toggleSelect() {
      if (this.isSelected) {
        this.removeVideo({ category: this.category, id: this.id });
      } else {
        this.addVideo({ category: this.category, id: this.id });
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

  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 16px 24px 0px rgba(0, 0, 0, 0.06);
}

.image-wrapper {
  padding-bottom: 0%;
  height: 130px;
  width: auto;
  @apply rounded-t-lg relative bg-white;
  img {
    @apply absolute top-0 left-0 w-full h-full object-cover rounded-t-lg;
  }
  @screen md {
    height: 130px;
  }
}
</style>
