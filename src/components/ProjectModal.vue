<template>
  <b-modal :active.sync="isModalActive" scroll="clip" :width="1259" :can-cancel="false">
    <div class="box">
      <div class="columns has-background-white">
        <div class="column is-8">
          <figure class="image is-128by128">
            <img :src="image" alt="Image" />
          </figure>
        </div>
        <div class="column is-4 information-project">
          <div class="has-text-right">
            <a @click="isModalActive = false">
              <b-icon
                pack="fas"
                icon="times-circle"
                size="is-medium"
                class="icons"
                type="is-secundary"
              ></b-icon>
            </a>
          </div>
          <div class="is-uppercase has-text-weight-bold">
            <p class="title is-4">{{name}}</p>
            <p class="subtitle is-6">
              <span>{{category}}</span>
              <span class="ml-2 mr-2">|</span>
              <span>{{year}}</span>
            </p>
          </div>
          <div class="information-client">
            <p class="is-size-6 has-text-weight-bold is-capitalized">client:</p>
            <p class="is-size-6 has-text-light is-italic">Creative Agency</p>
          </div>
          <div class="description-project">
            <p
              class="is-size-7"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ducimus modi voluptatibus maxime quo doloremque earum pariatur accusantium tempora, sit adipisci expedita sed inventore placeat labore mollitia aspernatur corporis minima.</p>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "ProjectModal",
  data() {
    return {
      isModalActive: false,
      image: "",
      name: "",
      category: "",
      year: "",
    };
  },
  mounted() {
    EventBus.$on("modal-project-active", (payload) => {
      this.isModalActive = payload.isModalActive;
      this.image = payload.image;
      this.name = payload.name;
      this.category = payload.category;
      this.year = payload.year;
    });
  },
};
</script>

<style lang="scss">
.year {
  float: right;
}
.media-content {
  margin-bottom: 0rem !important;
  padding-bottom: 0rem !important;
}
.content > p {
  margin-bottom: 0 !important;
}
.information-project {
  //position: relative;
}
.information-client {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.description-project {
  padding-right: 4rem;
}
.control-left {
  position: absolute;
  bottom: 0rem;
  left: 1rem;
}
.control-right {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
.f-left {
  float: left;
}
.f-right {
  float: right;
}
.controls {
  margin-top: auto;
}
</style>