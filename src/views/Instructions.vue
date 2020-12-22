<template>
  <div
    class="main-wrapper grid py-8 md:py-4 bg-c3-teal w-full min-h-full  justify-center gap-x-16 gap-y-8 md:gap-4 lg:gap-y-0 content-center relative "
  >
    <title-xl
      class="h-auto md:w-52 w-36  row-start-1 col-span-1 row-span-1 justify-self-center md:col-start-2 md:row-start-1 md:justify-self-start lg:col-start-2  lg:row-start-2 lg:justify-self-end"
    />

    <main
      class="relative items-center categories-grid row-start-2 row-span-1 col-span-1  md:col-start-2 md:col-span-1 lg:col-start-3  md:items-start md:self-start self-center "
    >
      <p class="font-bold sm:text-xl md:text-2xl col-span-2 ">
        Here's how it works
      </p>
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="flex items-center "
      >
        <circles-group
          class = "md:mr-4 m-4"
          :color="category.color"
          customDotClass="h-9 w-9 md:h-12 md:w-12 lg:h-12 lg:w-12  "
        />
        <p
          class="text-white font-bold text-2xl md:text-4xl font-section uppercase"
          :style="{ width: '12ch' }"
        >
          {{ category.name }}
        </p>
      </div>
      <p class="md:bottom-0 md:-mb-5 md:mr-5 md:absolute col-span-2 justify-self-end md:col-row-3">
        * Optional
      </p>
    </main>
   
    <circular-message
      class="hidden mt-4 md:flex md:col-start-2 lg:col-start-4 md:row-start-3  h-auto w-24  animate-spin-slow md:justify-self-end lg:justify-self-start  "
    />
    <footer
      class="flex justify-center  row-start-3 row-span-1 col-span-1 md:justify-between  md:row-start-5 md:row-span-1 md:col-start-2 md:col-span-1 lg:col-span-full  md:py-7 md:px-10"
    >
      <c3-logo class="hidden md:flex h-14 w-28 " />

      <div class=" flex  items-center">
        <router-link
          :to="{ name: 'Welcome' }"
          tag="button"
          class=" text-xl md:text-2xl text-white py-2 px-8 pl-2"
        >
          <button-arrow
            class=" hidden md:flex h-2 w-auto transform rotate-180 pl-2"
          />
          <button-arrow-sm
            class="  md:hidden h-2 w-auto transform rotate-180 pl-2"
          />
          Back
        </router-link>
        <router-link
          :to="{ name: 'select' }"
          tag="button"
          class="bg-white text-xl md:text-2xl py-2"
        >
          <button-arrow class="hidden md:flex h-2 w-auto pr-2" />
          <button-arrow-sm class="md:hidden h-2 w-auto pr-2" />
          Let's Go
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import titleXl from "@/assets/illustrations/adventure-title.svg";
import circularMessage from "@/assets/illustrations/circular-message.svg";
import c3Logo from "@/assets/illustrations/c3-logo.svg";
import buttonArrow from "@/assets/icons/button-arrow.svg?inline";
import buttonArrowSm from "@/assets/icons/button-arrow-sm.svg?inline";
import circlesGroup from "@/components/circlesGroup.vue";
export default {
  components: {
    titleXl,
    circlesGroup,
    circularMessage,
    buttonArrow,
    buttonArrowSm,
    c3Logo,
  },
  data() {
    return {
      categories: [
        {
          color: "bg-c3-green",
          name: "Select your worship",
        },
        {
          color: "bg-c3-orange",
          name: "Select your story *",
        },
        {
          color: "bg-c3-red",
          name: "Select your preach",
        },
        {
          color: "bg-c3-beige",
          name: "Select your c3 kids episode*",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text-categories {
  @apply text-white font-bold text-3xl uppercase font-section;
}

.main-wrapper {
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  @screen md {
    grid-template-columns: 3.5rem 1fr 3.5rem;
    grid-template-rows: 1fr auto auto 3rem auto;
  }
  @screen lg {
    grid-template-columns: 0.3fr 1fr auto 1fr 0.3fr;
    grid-template-rows: 1fr auto auto  auto;
  }
}

.categories-grid {
  @apply flex flex-col gap-8;

  @screen md {
    @apply grid grid-cols-2 grid-rows-3 gap-12;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }
}
</style>
