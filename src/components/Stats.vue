<template>
  <div class="stats">
    <BackToGame />
    <h2>Stats</h2>
    <ul>
      <li>Times clicked: {{ stats.timesClicked }} </li>
      <li>Skill gained by clicking: {{ stats.skillGainClick }}</li>
      <li>Skill gained by idling: {{ stats.skillGainIdle}}</li>
      <li>Songs learned: {{ stats.songsLearned }}</li>
      <li>Shows played: {{ stats.showsPlayed }}</li>
      <li>Fame gained by playing shows: {{ stats.fameGainedShows }}</li>
    </ul>
  </div>
</template>

<script>
import BackToGame from "@/components/BackToGame.vue";
import { mapState } from "vuex";
export default {
  components: {
    BackToGame
  },

  computed: {
    ...mapState(["stats"])
  }
};
</script>

<style scoped>

</style>