<template>
  <b-modal :active.sync="isModalActive" scroll="clip" :can-cancel="false">
    <div class="box">
      <div class="columns has-background-white">
        <div class="column is-6 is-mobile">
          <div class="mt-5 ml-2 mb-5">
            <div class="has-text-right is-sr-only-mobile">
              <a class="container-close" @click="isModalActive = false">
                <b-icon pack="fas" icon="times-circle" size="is-medium" type="is-secundary"></b-icon>
              </a>
            </div>
            <h1 class="title is-1 is-uppercase has-text-weight-bold">hablemos</h1>
            <h2 class="subtitle is-6 is-uppercase has-text-weight-bold">llamame o envíame un mensaje</h2>
            <ul>
              <li>
                <b-icon class="is-inline mr-1" pack="fas" icon="phone-square" type="is-secundary"></b-icon>
                <span class>97564321</span>
              </li>
              <li>
                <b-icon
                  class="is-inline mr-1"
                  pack="fas"
                  icon="envelope-square"
                  type="is-secundary"
                ></b-icon>
                <span class>xanandra2014@gmail.com</span>
              </li>
            </ul>
            <div class="form mt-5">
              <b-field label="Email">
                <b-input placeholder="Email" rounded></b-input>
              </b-field>
              <b-field label="Solicitud">
                <b-input
                  aria-placeholder="Escribe tu solicitud"
                  maxlength="200"
                  type="textarea"
                  :has-counter="false"
                ></b-input>
              </b-field>
            </div>
            <div class="has-text-right mt-5">
              <b-button type="is-secundary" class="is-uppercase has-text-weight-bold" rounded>enviar</b-button>
            </div>
          </div>
        </div>
        <div class="column is-6 is-hidden-mobile">
          <figure class="image is-3by2 container-image">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Image" />
          </figure>
          <a class="container-close" @click="isModalActive = false">
            <b-icon pack="fas" icon="times-circle" size="is-medium" type="is-secundary"></b-icon>
          </a>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "Contact",
  data() {
    return {
      isModalActive: false,
    };
  },
  mounted() {
    EventBus.$on("modal-hire-active", (val) => {
      this.isModalActive = val;
    });
  },
};
</script>

<style lang="scss">
.container-image {
  position: relative;
}
.container-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.icon-xsmall {
  width: 0.3rem !important;
  height: 0.3rem !important;
}
</style>