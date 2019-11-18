<template>
  <div class="game">
    <Nav />

    <div class="clicker-and-songs">
      <Clicker />
      <SongUpgrades />

    </div>

    <div class="show-and-merch">
      <Shows />
      <Merchandise />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Clicker from "@/components/game/Clicker.vue";
import SongUpgrades from "@/components/game/SongUpgrades.vue";
import Shows from "@/components/game/Shows.vue";
import Merchandise from "@/components/game/Merchandise.vue";

export default {
  name: "Game",
  components: {
    Nav,
    Clicker,
    SongUpgrades,
    Shows,
    Merchandise
  }
};
</script>