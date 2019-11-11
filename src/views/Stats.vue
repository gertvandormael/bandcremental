<template>
  <div class="stats">
    <Nav />
    <Stats />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Stats from "@/components/Stats.vue";

export default {
  name: "stats",
  components: {
    Nav,
    Stats
  }
};
</script>