<template>
  <div
    class="main-wrapper py-6 md:py-4  bg-c3-teal w-full min-h-full grid justify-center gap-8 md:gap-16 content-center relative "
  >
    <title-xl
      class="w-80 h-auto md:w-auto  col-span-2 row-span-1 row-start-2 md:col-start-2 md:col-span-1 md:row-span-2 md:row-start-1 justify-self-center md:justify-self-end self-center md:self-end  mx-6 md:m-0"
    />

    <div
      class="col-span-1 row-start-3 row-span-1 md:col-start-3 md:row-start-1 md:row-span-2 flex flex-col gap-2 md:gap-4 justify-self-end md:justify-self-start	md:self-center align-center relative w-max "
    >
      <circles-group
        color="bg-c3-green"
        customDotClass="h-7 w-7 md:h-9 md:w-9 lg:h-16 lg:w-16"
      />
      <circles-group
        color="bg-c3-red"
        customDotClass="h-7 w-7 md:h-9 md:w-9 lg:h-16 lg:w-16"
      />
      <circles-group
        color="bg-c3-orange"
        customDotClass="h-7 w-7 md:h-9 md:w-9 lg:h-16 lg:w-16"
      />
      <circular-message
        class="md:w-24 lg:w-32 hidden md:flex absolute md:ml-16 lg:ml-28 mt-16 animate-spin-slow"
      />
    </div>
    <circular-message
      class="col-span-2 row-start-1 justify-self-center md:hidden h-auto w-24 self-center animate-spin-slow"
    />
    <div
      class="col-span-2 row-start-4 self-center md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2 lg:row-start-3 justify-self-center lg:justify-self-end lg:self-end w-max"
    >
      <router-link
        :to="{ name: 'Instructions' }"
        tag="button"
        class="bg-white text-2xl py-2"
      >
        <button-arrow class="h-2 w-auto" />
        Start
      </router-link>
    </div>
    <div
      class="col-start-2 row-start-3  md:col-start-3 md:row-start-3 text-white font-bold md:text-3xl uppercase font-section w-max text-2xl"
    >
      <p>WORSHIP</p>
      <p>Our Stories</p>
      <p>Preach</p>
      <p>Kids</p>
    </div>
    <c3-logo
      class="hidden md:flex absolute bottom-0 left-0 height-auto w-28 my-7 mx-10"
    />
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
.title-lg {
  @screen lg {
    width: 40rem;
  }
}

.main-wrapper {
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto 1fr 1fr auto;
  @screen md {
    grid-template-columns: 16px 1.4fr 1fr 16px;
    grid-auto-rows: auto auto fit-content(10px) auto;
  }
  @screen lg {
    grid-template-columns: 0.5fr 1.4fr 1fr 0.5fr;
    grid-auto-rows: auto auto fit-content(10px);
  }
}
</style>
