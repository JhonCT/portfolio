<template>
  <section class="mb-6 mt-4">
    <b-tabs position="is-centered">
      <b-tab-item label="All">
        <div class="columns is-multiline">
          <div
            class="column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
            v-for="project in projectsList"
            :key="project.id"
          >
            <ProjectItem
              :name="project.name"
              :category="project.category"
              :image="project.image"
              :year="project.year"
            />
          </div>
        </div>
      </b-tab-item>

      <b-tab-item label="App">
        <div class="columns is-multiline">
          <div
            class="column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
            v-for="project in projectsList"
            :key="project.id"
          >
            <ProjectItem
              :name="project.name"
              :category="project.category"
              :image="project.image"
              :year="project.year"
            />
          </div>
        </div>
      </b-tab-item>

      <b-tab-item label="Website">
        <div class="columns is-multiline">
          <div
            class="column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
            v-for="project in projectsList"
            :key="project.id"
          >
            <ProjectItem
              :name="project.name"
              :category="project.category"
              :image="project.image"
              :year="project.year"
            />
          </div>
        </div>
      </b-tab-item>

      <b-tab-item label="Interaction">
        <div class="columns is-multiline">
          <div
            class="column is-three-third-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
            v-for="project in projectsList"
            :key="project.id"
          >
            <ProjectItem
              :name="project.name"
              :category="project.category"
              :image="project.image"
              :year="project.year"
            />
          </div>
        </div>
      </b-tab-item>
    </b-tabs>
    <div class="center-item">
      <b-button
        type="is-secundary"
        class="has-text-weight-bold is-uppercase"
        outlined
        rounded
      >más trabajos</b-button>
    </div>
    <project-modal />
  </section>
</template>

<script>
import Projects from "../data/projects";
import ProjectItem from "./ProjectItem.vue";
import ProjectModal from "./ProjectModal.vue";

export default {
  name: "Projects",
  data() {
    return {
      projectsList: Projects,
    };
  },
  components: {
    ProjectItem,
    ProjectModal,
  },
};
</script>