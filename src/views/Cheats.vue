<template>
<div >
  <Nav />
  <Cheats />
</div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Cheats from "@/components/Cheats.vue"

export default {
  name: "cheats",
  components: {
    Nav, Cheats
  }
};
</script>