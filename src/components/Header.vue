<template>
  <div class="flex justify-between bg-c3-teal h-16 px-10">
    <button class="flex text-center p-4 items-center gap-2">
      <header-arrow class="svg-24" />
      Back to website
    </button>
    <div class="flex text-center items-center gap-4 font-bold">
      Connect with us
      <facebookIcon class="svg-24" />
      <instagramIcon class="svg-24" />
      <youtubeIcon class="svg-24" />
    </div>
    <div class="flex gap-2 items-center">
      <button>
        Connect
      </button>
      <button class="bg-c3-orange  text-white transform -rotate-2">
        Give
      </button>
    </div>
  </div>
</template>

<script>
import headerArrow from "@/assets/icons/header-arrow.svg?inline";
import facebookIcon from "@/assets/icons/social-media/facebook.svg?inline";
import instagramIcon from "@/assets/icons/social-media/instagram.svg?inline";
import youtubeIcon from "@/assets/icons/social-media/youtube.svg?inline";

export default {
  components: {
    headerArrow,
    facebookIcon,
    instagramIcon,
    youtubeIcon,
  },
};
</script>
