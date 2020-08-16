<template>
  <b-button
    class="is-uppercase"
    type="is-secundary has-text-weight-bold"
    :outlined="isOutlined"
    rounded
    @click="modalActive"
  >contáctame</b-button>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "ContactButton",
  data() {
    return {
      isModalActive: true,
    };
  },
  props: {
    isOutlined: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    modalActive() {
      EventBus.$emit("modal-hire-active", this.isModalActive);
    },
  },
};
</script>

<style>
</style>