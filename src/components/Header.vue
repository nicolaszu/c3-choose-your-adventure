<template>
  <div class="flex justify-between items-center bg-c3-teal h-16 px-10">
    <a href="//www.c3toronto.com">
      <button class="flex text-center items-center">
        <header-arrow class="svg-24 m-1" />
        Back to website
      </button>
    </a>
    <div class="flex text-center items-center  font-bold">
      Connect with us
      <a href="//www.facebook.com/C3ChurchToronto/" class="p-2">
        <facebookIcon class="svg-24" />
      </a>
      <a href="//www.instagram.com/c3toronto" class="p-2">
        <instagramIcon class="svg-24" />
      </a>
      <a href="//www.youtube.com/c3toronto" class="p-2">
        <youtubeIcon class="svg-24" />
      </a>
    </div>
    <div class="flex items-center">
       <a href="//www.c3toronto.com/decision" class="py-2">
        <button class="px-3">
          Raise Hand
        </button>
      </a>
      <a href="//www.c3toronto.com/connect" class="py-2 px-0">
        <button class="px-3 mr-3">
          Connect
        </button>
      </a>
      <a href="//www.c3toronto.com/giving">
        <button class="bg-c3-orange  text-white ">
          Give
        </button>
      </a>
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
