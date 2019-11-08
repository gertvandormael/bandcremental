<template>
<div class="home">
  <Nav />
  <HowToPlay />
</div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import HowToPlay from "@/components/HowToPlay.vue";

export default {
  name: "home",
  components: {
    Nav, HowToPlay
  }
};
</script>