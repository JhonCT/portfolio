<template>
  <a @click="modalActive">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img class="image-project" :src="image" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="has-text-weight-bold has-text-light is-uppercase">{{category}}</p>
          <p class="is-size-5 has-text-weight-bold is-uppercase is-inline">{{name}}</p>
          <p class="is-size-5 has-text-weight-bold is-inline year">{{year}}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "ProjectItem",
  data() {
    return {
      isModalActive: true,
    };
  },
  props: {
    name: String,
    category: String,
    image: String,
    year: String,
  },
  methods: {
    modalActive() {
      EventBus.$emit("modal-project-active", {
        isModalActive: this.isModalActive,
        image: this.image,
        category: this.category,
        name: this.name,
        year: this.year,
      });
    },
  },
};
</script>

<style lang="scss">
</style>