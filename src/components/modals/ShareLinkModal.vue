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
            class="px-12 flex flex-col items-center text-center  pb-16 pt-20"
          >
            <div class="flex flex-col md:flex-row pb-6">
              <input
                type="text"
                :value="currentURL"
                disabled
                class="border border-c3-teal p-2 md:mr-2 "
                :class="{
                  'outline-none ring-2 ring-c3-green border-transparent': isCopied,
                }"
                ref="inputCopy"
              />
              <button
                class="bg-c3-green justify-center md:justify-start py-1 my-1 md:my-0 md:py-0 text-white"
                v-clipboard:copy="currentURL"
                v-clipboard:success="onCopy"
              >
                Copy URL
              </button>
            </div>
            <p>Share this unique URL with your friends and family</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import closeIcon from "@/assets/icons/close.svg?inline";
export default {
  components: {
    closeIcon,
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
</style>
