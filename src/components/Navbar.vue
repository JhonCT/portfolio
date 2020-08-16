<template>
  <b-navbar class="container">
    <template slot="brand">
      <b-navbar-item tag="div">
        <figure class="image is-48x48">
          <img src="../assets/Avatar.png" alt="Jhon Deyner Catacora Tupa" />
        </figure>
      </b-navbar-item>
      <b-navbar-item tag="div" class="is-block">
        <p class="has-text-weight-bold">Jhon</p>
        <p class="has-text-weight-bold">Catacora Tupa</p>
        <p class="subtitle is-7">Full Stack Developer</p>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <a href="#" class="has-text-weight-bold nav-item is-uppercase">trabajo</a>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a href="#" class="has-text-weight-bold nav-item is-uppercase">acerca de mi</a>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a href="#" class="has-text-weight-bold nav-item is-uppercase">blog</a>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a href="#" class="has-text-weight-bold nav-item is-uppercase">contacto</a>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <contact-button :isOutlined="true" />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import ContactButton from "./ContactButton.vue";

export default {
  name: "Navbar",
  data() {
    return {
      isModalActive: true,
    };
  },
  components: {
    ContactButton,
  },
};
</script> 
