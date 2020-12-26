<template>
  <portal selector="#description-modal">
    <transition name="modal">
      <div
        class="fixed  top-0 left-0 w-full h-full md:bg-black md:bg-opacity-50 table transition-opacity "
        :style="{ 'z-index': '9999' }"
        @click="toggleClose"
      >
        <div class="table-cell align-middle">
          <div
            @click.stop=""
            class="modal-container bg-white rounded-xl  shadow-2xl shadow-reverse transition-all my-0 mx-auto relative	"
          >
            <button class=" p-0 ml-10 m-3 absolute right-0">
              <close-icon class="svg-24 text-gray-700" @click="toggleClose" />
            </button>

            <div class="px-4 flex flex-col  pb-6 pt-8">
              <p class="font-bold mb-2">{{ videoMeta.title }}</p>
              <p v-if="videoMeta.author" class="mb-2">{{ videoMeta.author }}</p>
              {{ videoMeta.description }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
import closeIcon from "@/assets/icons/close.svg?inline";
import { Portal } from "@linusborg/vue-simple-portal";

export default {
  components: {
    closeIcon,
    Portal,
  },
  props: {
    videoMeta: {
      required: true,
    },
  },
  methods: {
    toggleClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  width: 95vw;
  @screen md {
    min-width: 450px;
    width: 500px;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.close-icon {
  width: 24px;
  height: auto;
}

.shadow-reverse {
  box-shadow: 0 -25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
