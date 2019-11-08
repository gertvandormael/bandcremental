<template>
  <div class="game">
    <Nav />
    <Clicker />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Clicker from "@/components/Clicker.vue";

export default {
  name: "Game",
  components: {
    Nav,
    Clicker
  }
};
</script>