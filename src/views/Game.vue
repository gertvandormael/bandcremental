<template>
  <div class="game">
    <Nav />

    <div class="clicker">
      <Clicker />
    </div>

    <div class="container">
      <div class="upgrades">
        <h1>Upgrades</h1>
        <SongUpgrades />
      </div>
      <Shows />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Clicker from "@/components/Clicker.vue";
import SongUpgrades from "@/components/SongUpgrades.vue";
import Shows from "@/components/Shows.vue";

export default {
  name: "Game",
  components: {
    Nav,
    Clicker,
    SongUpgrades,
    Shows
  }
};
</script>