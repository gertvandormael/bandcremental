<template>
  <div class="stats">
    <div class="back">
      <router-link
        to="/game"
        tag="button"
      >
        <div class="test">
          <img
            src="../assets/back.png"
            alt=""
          >
          <p>Back to game</p>
        </div>
      </router-link>

    </div>
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
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["stats"])
  }
};
</script>

<style scoped>
  img {
    max-width: 50px;
    max-height: 50px;
  }

  .test {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  button {
    width: auto;
    height: auto;
    margin-bottom: 25px;
  }

</style>