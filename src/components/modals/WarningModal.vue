<template>
  <transition name="modal">
    <div
      class="fixed  top-0 left-0 w-full h-full bg-black bg-opacity-50 table transition-opacity "
      :style="{ 'z-index': '9999' }"
    >
      <div class="table-cell align-middle">
        <div
          class="modal-container border-t-8 border-c3-teal  bg-white rounded-xl  shadow-2xl transition-all my-0 mx-auto relative	"
        >
          <button class=" p-0 ml-10 m-3 absolute right-0">
            <close-icon class="svg-24 text-gray-700" @click="$emit('close')" />
          </button>

          <div
            class="px-12 flex flex-col items-center text-center gap-6 pb-12 pt-20"
          >
            <p class="font-bold text-lg">
              Your current video selections will be lost
            </p>
            <p class="font-bold text-lg">
              Do you wish to continue
            </p>
          </div>
          <div class="flex gap-2 justify-center pb-12">
            <button
              class="flex text-center items-center gap-2 py-2 items-center"
              @click="$emit('close')"
            >
              <button-arrow class="h-2 w-auto transform rotate-180 " />

              Cancel
            </button>
            <button
              class="flex text-center items-center gap-2 bg-c3-orange text-white py-2 items-center"
              @click="$emit('confirm')"
            >
              <button-arrow class="h-2 w-auto " />

              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import closeIcon from "@/assets/icons/close.svg?inline";
import buttonArrow from "@/assets/icons/button-arrow.svg?inline";

export default {
  components: {
    closeIcon,
    buttonArrow,
  },
  data() {
    return {
      isCopied: false,
    };
  },
  computed: {
    currentURL() {
      return window.location;
    },
  },
  methods: {
    onCopy() {
      console.log("hello");
      this.isCopied = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  min-width: 450px;
  width: 500px;
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
</style>
