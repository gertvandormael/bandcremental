<template>
<div class="home">
  <Nav />
  <HowToPlay />
  <BackToGame />
</div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import HowToPlay from "@/components/HowToPlay.vue";
import BackToGame from "@/components/BackToGame.vue";

export default {
  name: "howtoplay",
  components: {
    Nav, BackToGame, HowToPlay
  }
};
</script>