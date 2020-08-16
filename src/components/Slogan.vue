<template>
  <section>
    <div class="columns">
      <div class="column">
        <h2 class="subtitle is-4 has-text-ligth">Hola, Yo soy</h2>
        <h1 class="title has-text-weight-bold">Jhon Catacora Tupa</h1>
        <h2 class="subtitle is-6 has-text-ligth has-text-weight-bold">Full Stack Developer</h2>
        <div class="block">
          <b-icon
            v-for="skill in skillsList"
            :key="skill.id"
            pack="fab"
            :icon="skill.icon"
            size="is-medium"
            class="icons"
            :style="{backgroundColor: skill.color}"
            type="is-white"
          ></b-icon>
        </div>
        <div class="buttons">
          <contact-button />
          <resume-button />
        </div>
      </div>
      <div class="column">
        <figure class="image is-3by2">
          <img src="../assets/Captura.png" alt="Jhon Catacora Tupa" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import skills from "../data/skill";
import ContactButton from "./ContactButton.vue";
import ResumeButton from "./ResumeButton.vue";

export default {
  name: "Slogan",
  data() {
    return {
      skillsList: skills,
    };
  },
  components: {
    ContactButton,
    ResumeButton,
  },
};
</script>