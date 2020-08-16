<template>
  <section class="mt-6">
    <div class="columns">
      <div class="column">
        <figure class="image">
          <img src="../assets/Captura2.png" alt="Jhon Catacora Tupa" />
        </figure>
      </div>
      <div class="column">
        <h2 class="subtitle is-1 has-text-weight-bold is-uppercase">acerca de mi</h2>
        <h1 class="title has-text-weight-bold has-text-light is-uppercase">¿Quién soy yo?</h1>
        <p
          class="is-size-6"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat qui laborum corrupti impedit hic optio a adipisci, quos ad distinctio sit, numquam voluptatem laboriosam! Aut adipisci esse error reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel soluta minus voluptas, praesentium maiores id hic dignissimos ducimus reiciendis tenetur esse fugit libero magnam blanditiis veniam, inventore sunt amet repellat, laudantium molestiae nemo expedita natus autem possimus? Magni eligendi iure doloribus. Laborum at perspiciatis adipisci voluptate ab et recusandae eligendi. Distinctio doloribus laudantium ipsum quia, laboriosam ratione deleniti? Pariatur atque, distinctio aperiam voluptate dignissimos facilis aliquid eius quibusdam deleniti amet quo! Ad, voluptatibus ipsum veritatis fugit aperiam vel dolore porro ex officiis fugiat aliquam repudiandae illo culpa error expedita quo, dignissimos ratione enim obcaecati nisi. Culpa deleniti inventore in cumque.</p>
        <div class="buttons">
          <contact-button />
          <resume-button />
        </div>
      </div>
    </div>
    <contact-modal />
    <resume-modal />
  </section>
</template>

<script>
import ContactButton from "./ContactButton";
import ContactModal from "./ContactModal";
import ResumeButton from "./ResumeButton";
import ResumeModal from "./ResumeModal";

export default {
  name: "About",
  components: {
    ContactButton,
    ContactModal,
    ResumeButton,
    ResumeModal,
  },
};
</script>

<style lang="scss">
.buttons {
  margin-top: 3rem;
}
.title {
  font-size: 4.3rem;
}
</style>