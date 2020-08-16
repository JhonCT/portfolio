<template>
  <section class="mt-6">
    <div class="has-text-centered mb-6">
      <h1 class="title has-text-weight-bold is-uppercase">leeme</h1>
      <h2 class="subtitle has-text-light">A veces escribo algo inteligente</h2>
    </div>
    <div>
      <div class="columns is-multiline">
        <div
          class="column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
          v-for="post in postsList"
          :key="post.id"
        >
          <ReadMeItem
            :day="post.day"
            :month="post.month"
            :image="post.image"
            :title="post.title"
            :category="post.category"
            :description="post.description"
            :url="post.url"
          />
        </div>
        <div class="column is-full has-text-right mt-5 mb-5">
          <b-button type="is-text" class="is-size-7">Ver más posts</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ReadMeItem from "./ReadMeItem.vue";
import Posts from "../data/posts";

export default {
  name: "ReadMe",
  data() {
    return {
      postsList: Posts,
    };
  },
  components: {
    ReadMeItem,
  },
};
</script>