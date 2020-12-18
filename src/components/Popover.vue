<template>
  <div>
    <div
      ref="trigger"
      @mouseover="onHover && !disabled ? startTimer() : ''"
      @mouseleave="onHover && !disabled ? toggleClose() : ''"
      @click="!onHover && !disabled ? toggleOpen() : ''"
      v-click-outside="toggleClose"
    >
      <slot name="trigger">
        <p>{{ triggerText }}</p>
      </slot>
    </div>
    <div
      ref="popoverMessage"
      v-show="open"
      class="absolute"
      :style="{ 'z-index': '9999' }"
    >
      <slot name="popover">
        <p
          class="text-left w-52 text-white bg-gray-1 shadow-md rounded popover-content p-2"
        >
          {{ popoverText }}
        </p>
      </slot>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
import vClickOutside from "v-click-outside";

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    placement: {
      type: String,
      default: "top",
    },
    popoverText: {
      type: String,
      default: "Message",
    },
    triggerText: {
      type: String,
      default: "Trigger",
    },
    onHover: {
      type: Boolean,
      default: false,
    },
    hoverTime: {
      type: Number,
      default: 500,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: false,
      popperInstance: null,
      timer: null,
    };
  },
  methods: {
    toggleOpen() {
      this.open = true;
      this.initPopper();
    },
    startTimer() {
      if (this.hoverTime !== 0 && !this.timer) {
        this.timer = setTimeout(() => {
          this.toggleOpen();
        }, this.hoverTime);
      } else {
        this.toggleOpen();
      }
    },
    stopTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    toggleClose() {
      this.stopTimer();
      this.open = false;
      this.destroyPopper();
    },
    initPopper() {
      const button = this.$refs.trigger;
      const popover = this.$refs.popoverMessage;

      this.popperInstance = createPopper(button, popover, {
        placement: this.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 4],
            },
          },
        ],
      });
    },
    destroyPopper() {
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popover-content {
  z-index: 20;
}
</style>
