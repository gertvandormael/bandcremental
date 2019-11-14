<template>
<div >
  <Nav />
  <Cheats />
  <BackToGame />
</div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Cheats from "@/components/cheats/Cheats.vue"
import BackToGame from "@/components/BackToGame.vue";

export default {
  name: "cheats",
  components: {
    Nav, BackToGame, Cheats
  }
};
</script>