<template>
  <div class="flex justify-between bg-c3-white h-16 px-5">
    <c3-logo class="height-auto w-24" />

    <button class="hidden  flex text-center p-4 items-center gap-2">
      <header-arrow class="svg-24" />
      Back to website
    </button>
    <div class="hidden flex text-center items-center gap-4 font-bold">
      Connect with us
      <facebookIcon class="svg-24" />
      <instagramIcon class="svg-24" />
      <youtubeIcon class="svg-24" />
    </div>
    <div class="flex gap-2 items-center text-sm">
      <button>
        Connect
      </button>
      <button
        class="bg-c3-orange  text-white transform -rotate-2 text-sm py-1 "
      >
        Give
      </button>
      <button class="">
        <menu-icon class="svg-24" />
      </button>
    </div>
  </div>
</template>

<script>
import headerArrow from "@/assets/icons/header-arrow.svg?inline";
import facebookIcon from "@/assets/icons/social-media/facebook.svg?inline";
import instagramIcon from "@/assets/icons/social-media/instagram.svg?inline";
import youtubeIcon from "@/assets/icons/social-media/youtube.svg?inline";
import menuIcon from "@/assets/icons/menu.svg?inline";
import c3Logo from "@/assets/illustrations/c3-logo.svg";
export default {
  components: {
    headerArrow,
    facebookIcon,
    instagramIcon,
    youtubeIcon,
    menuIcon,
    c3Logo,
  },
};
</script>
