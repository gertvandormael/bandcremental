<template>
  <div class="stats">
    <Nav />
    <Stats />
    <BackToGame />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Stats from "@/components/Stats.vue";
import BackToGame from "@/components/BackToGame.vue";

export default {
  name: "stats",
  components: {
    Nav,
    BackToGame,
    Stats
  }
};
</script>