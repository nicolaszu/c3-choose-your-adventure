<template>
  <div
    class="sticky top-0  flex flex-col gap-1 justify-between bg-c3-white h-16  bg-white"
    :style="{ 'z-index': '100' }"
    v-click-outside="hideCollapse"
  >
    <div class="flex  justify-between bg-c3-white h-16 px-5 ">
      <a href="//www.c3toronto.com" class="self-center">
        <c3-logo class="height-auto w-24" />
      </a>

      <div class="flex gap-2 items-center text-sm">
        <a href="//www.c3toronto.com/connect">
          <button>
            Connect
          </button>
        </a>
        <a href="//www.c3toronto.com/giving">
          <button
            class="bg-c3-orange  text-white text-sm py-1 "
          >
            Give
          </button>
        </a>
        <button @click="isCollapsed = !isCollapsed" class="burger-animate">
          <menu-icon class="svg-24" />
        </button>
      </div>
    </div>
    <transition name="slide">
      <div
        class="w-full  bg-white p-4 text-center dropdown shadow-md"
        v-show="!isCollapsed"
      >
        <p class="pb-2">Connect with us</p>
        <div class=" flex text-center items-center justify-center ">
          <a href="//www.facebook.com/C3ChurchToronto/" class="p-2">
            <facebookIcon class="svg-20" />
          </a>
          <a href="//www.instagram.com/c3toronto" class="p-2">
            <instagramIcon class="svg-20" />
          </a>
          <a href="//www.youtube.com/c3toronto" class="p-2">
            <youtubeIcon class="svg-20" />
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import facebookIcon from "@/assets/icons/social-media/facebook.svg?inline";
import instagramIcon from "@/assets/icons/social-media/instagram.svg?inline";
import youtubeIcon from "@/assets/icons/social-media/youtube.svg?inline";
import menuIcon from "@/assets/icons/menu.svg?inline";
import c3Logo from "@/assets/illustrations/c3-logo.svg";
import vClickOutside from "v-click-outside";

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    facebookIcon,
    instagramIcon,
    youtubeIcon,
    menuIcon,
    c3Logo,
  },
  data() {
    return {
      isCollapsed: true,
    };
  },
  methods: {
    hideCollapse() {
      this.isCollapsed = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}

.dropdown {
  transform-origin: top;
  transition: transform 0.1s ease-in-out;
}
</style>
