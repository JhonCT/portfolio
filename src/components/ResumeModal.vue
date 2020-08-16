<template>
  <b-modal :active.sync="isModalActive" :width="1250" scroll="clip" :can-cancel="false">
    <div class="box">
      <div class="has-background-white pb-6">
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
        <div class="has-text-centered">
          <h1 class="title is-2 mb-6 is-capitalized">curriculum vitae</h1>
        </div>
        <div class="container-resume">
          <div class="columns is-mobile">
            <div class="column is-6 has-text-right">
              <b-button class="is-uppercase mb-6" type="is-secundary" outlined rounded>descargar pdf</b-button>
            </div>
            <div class="column is-6">
              <b-button class="is-uppercase mb-6" type="is-secundary" outlined rounded>imprimir</b-button>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-2-desktop is-3-tablet is-hidden-mobile"></div>
            <div
              class="column is-4-desktop is-3-tablet is-6-mobile has-text-right column-border-right"
            >
              <div class="mr-5">
                <h3 class="title is-5 is-uppercase">experiencia</h3>
                <div class="mb-5 is-size-7" v-for="experience in experiences" :key="experience.id">
                  <p
                    class="has-text-underline has-text-weight-bold is-capitalized"
                  >{{experience.date}}</p>
                  <p class="has-text-weight-bold is-capitalized">{{experience.agency}}</p>
                  <p class="is-italic is-capitalized">{{experience.position}}</p>
                  <p>{{experience.description}}</p>
                </div>
              </div>
            </div>
            <div class="column is-4-desktop is-3-tablet is-6-mobile column-border-left">
              <div class="ml-5">
                <h3 class="title is-5 is-uppercase">educación</h3>
                <div class="mb-5" v-for="degree in degrees" :key="degree.id">
                  <p class="is-size-7 has-text-underline has-text-weight-bold">{{degree.date}}</p>
                  <p class="is-size-7 has-text-weight-bold is-capitalized">{{degree.career}}</p>
                  <p class="is-size-7 is-italic is-capitalized">{{degree.university}}</p>
                </div>
                <h3 class="title is-5 is-uppercase">skills</h3>
                <div class="mb-6">
                  <div class="columns is-mobile" v-for="skill in skills" :key="skill.id">
                    <div class="column is-3-desktop is-4-mobile p-0 ml-3">
                      <span class="is-size-7">{{skill.name}}</span>
                    </div>
                    <div class="column is-6-mobile p-0 mr-6">
                      <b-progress class="mt-2" :value="skill.value"></b-progress>
                    </div>
                  </div>
                </div>
                <h3 class="title is-5 is-uppercase">premios</h3>
                <div class="columns is-mobile is-size-7" v-for="award in awards" :key="award.id">
                  <div class="column is-1-desktop is-3-mobile has-text-underline">{{award.date}}</div>
                  <div class="column is-11-desktop is-9-mobile">
                    <p class="has-text-weight-bold is-uppercase">{{award.title}}</p>
                    <p>{{award.description}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-2-desktop is-3-tablet is-hidden-mobile"></div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import experience from "@/data/experience";
import degree from "@/data/degree";
import skill from "@/data/skill";
import award from "@/data/award";
import EventBus from "@/event-bus";

export default {
  name: "ResumeModal",
  data() {
    return {
      isModalActive: false,
      skills: skill,
      experiences: experience,
      degrees: degree,
      awards: award,
    };
  },
  mounted() {
    EventBus.$on("modal-active-resume", (val) => {
      this.isModalActive = val;
    });
  },
};
</script>

<style lang="scss">
.column-border-right {
  border-right: 1px solid black;
}
.column-border-left {
  border-left: 1px solid black;
}
</style>