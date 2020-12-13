<template>
  <div
    class="main-wrapper bg-c3-teal w-full h-full grid justify-center gap-16 content-center relative "
  >
    <title-xl
      class="title-size col-start-2 col-span-1 row-span-2 row-start-1 justify-self-end self-end "
    />

    <div
      class="col-start-3 row-start-1 row-span-2 flex flex-col gap-4 self-center align-center relative w-max "
    >
      <circles-group color="bg-c3-green" size="16" />
      <circles-group color="bg-c3-red" size="16" />
      <circles-group color="bg-c3-orange" size="16" />
      <circular-message
        class="message-size h-auto w-32 absolute ml-28 mt-16 animate-spin-slow"
      />
    </div>
    <div class="col-start-2 row-start-3 justify-self-end self-end w-max">
      <router-link
        :to="{ name: 'Instructions' }"
        tag="button"
        class="bg-white text-2xl py-2"
      >
        <button-arrow class="h-2 w-auto" />
        Start
      </router-link>
    </div>
    <div class="col-start-3 row-start-3 text-categories w-max ">
      <p>WORSHIP</p>
      <p>Our Stories</p>
      <p>Preach</p>
      <p>Kids</p>
    </div>
    <c3-logo class="absolute bottom-0 left-0 height-auto w-28 my-7 mx-10" />
  </div>
</template>

<script>
import titleXl from "@/assets/illustrations/adventure-title.svg";
import circularMessage from "@/assets/illustrations/circular-message.svg";
import c3Logo from "@/assets/illustrations/c3-logo.svg";
import buttonArrow from "@/assets/icons/button-arrow.svg?inline";
import circlesGroup from "@/components/circlesGroup.vue";
export default {
  components: {
    titleXl,
    circlesGroup,
    circularMessage,
    buttonArrow,
    c3Logo,
  },
};
</script>

<style lang="scss" scoped>
.title-size {
  height: auto;
  width: 40rem;
}

.text-categories {
  @apply text-white font-bold text-3xl uppercase font-section;
}

.main-wrapper {
  grid-template-columns: 0.5fr 1.4fr 1fr 0.5fr;
  grid-auto-rows: auto auto fit-content(10px);
}
</style>
