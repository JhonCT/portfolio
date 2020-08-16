<template>
  <section class="hero is-secundary">
    <div class="hero-body">
      <div class="container">
        <b-carousel :arrow="false" :indicator="false" :autoplay="true" :pause-info="false">
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section class="hero is-small is-secundary">
              <div class="hero-body">
                <h1 class="comment has-text-centered">{{carousel.title}}</h1>
              </div>
            </section>
          </b-carousel-item>
        </b-carousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      carousels: [
        {
          title:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores inventore nulla laudantium nisi. Aspernatur eos doloremque iusto deleniti nesciunt dolorem maxime hic cum recusandae veritatis, soluta non cumque? Assumenda, unde.",
        },
        {
          title:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores inventore nulla laudantium nisi. Aspernatur eos doloremque iusto deleniti nesciunt dolorem maxime hic cum recusandae veritatis, soluta non cumque? Assumenda, unde.",
        },
        {
          title:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores inventore nulla laudantium nisi. Aspernatur eos doloremque iusto deleniti nesciunt dolorem maxime hic cum recusandae veritatis, soluta non cumque? Assumenda, unde.",
        },
        {
          title:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores inventore nulla laudantium nisi. Aspernatur eos doloremque iusto deleniti nesciunt dolorem maxime hic cum recusandae veritatis, soluta non cumque? Assumenda, unde.",
        },
      ],
    };
  },
};
</script>