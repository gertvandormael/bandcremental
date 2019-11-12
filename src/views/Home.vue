<template>
  <div class="home">
    <Nav />
    <HowToPlay />
    <router-link
      to="/game"
      tag="button"
    >Play game!</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import HowToPlay from "@/components/HowToPlay.vue";

export default {
  name: "home",
  components: {
    Nav,
    HowToPlay
  }
};
</script>