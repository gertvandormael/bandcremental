<template>
  <div class="game">
    <Nav />
    <div class="clicker">
      <Clicker />
    </div>
    <div class="upgrades">
      <h1>Upgrades</h1>
      <SongUpgrades />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Clicker from "@/components/Clicker.vue";
import SongUpgrades from "@/components/SongUpgrades.vue"

export default {
  name: "Game",
  components: {
    Nav, Clicker, SongUpgrades
  }
};
</script>