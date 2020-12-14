<template>
  <div
    class="main-wrapper bg-c3-teal w-full h-full grid justify-center gap-x-16 content-center relative "
  >
    <title-xl
      class="h-auto w-52 col-start-2 col-span-1 row-span-1 row-start-1 justify-self-end"
    />

    <main
      class="categories-grid col-start-3 col-span-1 row-start-1 row-span-1  gap-16 h-min "
    >
      <p class="font-bold text-2xl col-span-2 ">
        Here's how it works
      </p>
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="flex gap-4 items-center"
      >
        <circles-group :color="category.color" size="12" />
        <p
          class="text-white font-bold text-4xl font-section uppercase"
          :style="{ width: '12ch' }"
        >
          {{ category.name }}
        </p>
      </div>
      <p class="col-span-2 justify-self-end">
        * Optional
      </p>
    </main>
    <circular-message
      class="col-start-4 row-start-2 h-auto w-24  animate-spin-slow"
    />
    <c3-logo class="absolute bottom-0 left-0 height-auto w-28 my-7 mx-10" />

    <div class="absolute bottom-0 my-7 mx-10 right-0 flex gap-8">
      <router-link
        :to="{ name: 'Welcome' }"
        tag="button"
        class="text-2xl text-white py-2"
      >
        <button-arrow class="h-2 w-auto transform rotate-180" />
        Back
      </router-link>
      <router-link
        :to="{ name: 'select' }"
        tag="button"
        class="bg-white text-2xl py-2"
      >
        <button-arrow class="h-2 w-auto" />
        Let's Go
      </router-link>
    </div>
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
  grid-template-columns: 0.3fr 1fr auto 1fr 0.3fr;
  grid-template-rows: auto auto;
}

.categories-grid {
  @apply grid grid-cols-2 grid-rows-3;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
}
</style>
