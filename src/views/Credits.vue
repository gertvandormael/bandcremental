<template>
<div class="home">
  <Nav />
  <Credits />
  <BackToGame />
</div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Credits from "@/components/Credits.vue";
import BackToGame from "@/components/BackToGame.vue";

export default {
  name: "credits",
  components: {
    Nav, BackToGame, Credits
  }
};
</script>