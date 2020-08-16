<template>
  <div class="post">
    <div class="container-image-post">
      <div class="container-date has-background-secundary has-text-white has-text-centered">
        <p>{{day}}</p>
        <p class="is-capitalized">{{month}}</p>
      </div>
      <figure class="image is-4by3">
        <img :src="image" alt="Post" />
      </figure>
    </div>
    <div class="information-post">
      <div class="has-text-weight-bold is-uppercase">
        <p class="title is-5">{{title}}</p>
        <p class="subtitle is-6 has-text-light">{{category}}</p>
      </div>
      <div class="content">{{description}}</div>
      <div>
        <b-button
          type="is-secundary"
          class="is-uppercase"
          @click="goToPost(url)"
          outlined
          rounded
        >leer más</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadMeItem",
  props: {
    day: Number,
    month: String,
    image: String,
    title: String,
    category: String,
    description: String,
    url: String,
  },
  methods: {
    goToPost(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss">
.container-image-post {
  position: relative;
}
.container-date {
  float: left;
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;
  width: 5rem;
  height: 5rem;
  padding-top: 1em;
}
.information-post {
  margin-top: 1rem;
}
</style>