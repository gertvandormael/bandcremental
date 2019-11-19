<template>
  <div class="stats">
    <h2>Stats</h2>
    <h3>Clicks and skill gains</h3>
    <ul>
      <li>Times clicked: {{ stats.timesClicked }} </li>
      <li>Skill gained by clicking: {{ stats.skillGainClick }}</li>
      <li>Skill gained by idling: {{ stats.skillGainIdle}}</li>
    </ul>
    <h3>Shows and money gains</h3>
    <ul>
      <li>Shows played: {{ stats.showsPlayed }}</li>
      <li>Money gained by playing shows: {{ stats.moneyGainedShows }}</li>
    </ul>
    <h3>Merchandising and fame gains</h3>
    <ul>
      <li>Total staff members selling merchandising: {{ stats.merchStaff }}</li>
      <li>Staff members selling albums: {{ staffAlbums }}</li>
      <li>Staff members selling band shirts: {{ staffShirts }} </li>
      <li>Fame gained by selling albums: {{ fameGainAlbums }}</li>
      <li>Fame gained by selling band shirts: {{ fameGainShirts }}</li>

    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["stats", "merchandising"]),

    staffAlbums() {
      return this.merchandising[0].staff;
    },

    staffShirts() {
      return this.merchandising[1].staff;
    },

    fameGainAlbums() {
      let fameGain =
        this.merchandising[0].fameGain * this.merchandising[0].staff;
      return fameGain;
    },

    fameGainShirts() {
      let fameGain =
        this.merchandising[1].fameGain * this.merchandising[1].staff;
      return fameGain;
    }
  }
};
</script>

<style scoped>

</style>