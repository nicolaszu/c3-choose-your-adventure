<template>
  <div
    class="grid grid-cols-2 grid-rows-1 gap-1 w-max h-max"
    :style="{ height: 'fit-content' }"
  >
    <div
      v-bind="$attrs"
      v-for="index in 4"
      :key="index"
      class="rounded-full "
      :class="[color, customDotClass]"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: "bg-white",
    },
    size: {
      type: String,
      default: "8",
    },
    customDotClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    getSize() {
      return `h-${this.size} w-${this.size}`;
    },
  },
};
</script>

<style></style>
