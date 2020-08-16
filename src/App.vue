<template>
  <div id="app">
    <section class="hero is-white is-fullheight">
      <div class="hero-head">
        <navbar />
      </div>
      <div class="hero-body is-block container">
        <slogan />
        <projects />
        <comment />
        <about />
        <read-me />
      </div>
      <div class="hero-foot">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Slogan from "./components/Slogan.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Comment from "./components/Comment.vue";
import ReadMe from "./components/ReadMe.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Slogan,
    Projects,
    About,
    Comment,
    ReadMe,
    Footer,
  },
};
</script>

<style></style>
