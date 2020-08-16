<template>
  <b-button
    type="is-grey"
    class="has-text-weight-bold has-text-grey is-uppercase"
    outlined
    rounded
    @click="modalActive"
  >ver mi cv</b-button>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "ResumeButton",
  data() {
    return {
      isModalActive: true,
    };
  },
  methods: {
    modalActive() {
      EventBus.$emit("modal-active-resume", this.isModalActive);
    },
  },
};
</script>

<style>
</style>