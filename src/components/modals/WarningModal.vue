<template>
  <transition name="modal">
    <div
      class="fixed  top-0 left-0 w-full h-full  md:bg-black md:bg-opacity-50 table transition-opacity "
      :style="{ 'z-index': '9999' }"
      @click="$emit('close')"
    >
      <div class="table-cell align-middle">
        <div
          @click.stop=""
          class="modal-container border-t-8 border-c3-teal shadow-y bg-white rounded-xl transition-all my-0 mx-auto relative	"
        >
          <button class=" p-0 ml-10 m-3 absolute right-0">
            <close-icon class="svg-24 text-gray-700" @click="$emit('close')" />
          </button>

          <div
            class="px-12 flex flex-col items-center text-center  pb-12 pt-20"
          >
            <p class="font-bold text-lg pb-6">
              Your current video selections will be lost
            </p>
            <p class="font-bold text-lg">
              Do you wish to continue
            </p>
          </div>
          <div class="flex md:flex-row  justify-center pb-12">
            <button
              class="flex text-center items-center  py-2 items-center mr-2"
              @click="$emit('close')"
            >
              <button-arrow
                class="hidden md:flex h-2 w-auto transform rotate-180 mr-2 "
              />
              <button-arrow-sm
                class="md:hidden h-2 w-auto transform rotate-180 mr-2 "
              />

              Cancel
            </button>
            <button
              class="flex text-center items-center bg-c3-orange text-white py-2 items-center"
              @click="$emit('confirm')"
            >
              <button-arrow class="hidden md:flex h-2 w-auto mr-2" />
              <button-arrow-sm class="md:hidden h-2 w-auto mr-2" />

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
import buttonArrowSm from "@/assets/icons/button-arrow-sm.svg?inline";

export default {
  components: {
    closeIcon,
    buttonArrow,
    buttonArrowSm,
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
      this.isCopied = true;
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
.shadow-y {
  box-shadow: 0 -25px 50px -12px rgba(0, 0, 0, 0.25),
    0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
