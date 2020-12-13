<template>
  <div
    class="grid grid-cols-2 grid-rows-1 gap-1 w-max h-max"
    :style="{ height: 'fit-content' }"
  >
    <div
      v-for="index in 4"
      :key="index"
      class="rounded-full "
      :class="[getSize, color]"
    />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "bg-white",
    },
    size: {
      type: String,
      default: "8",
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
