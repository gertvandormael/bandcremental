<template>
  <div class="shows">
    <h1>Shows</h1>
    <div
      class="show"
      v-for="show in shows"
      :key="show.id"
    >
      <img
        src="../assets/show-locked.png"
        alt="show locked"
        v-if="!show.active"
      />
      <img
        src="../assets/band2.gif"
        alt="show unlocked"
        v-if="show.active"
      />

      <div class="info">
        <h3>{{ show.name }}</h3>
      </div>
      <div class="button">
        <button
        @click="playShow(show)"
        :disabled="show.active"
        >
          Play show!
        </button>
        <div class="requirements">
          <ul>
            <li>Gain {{ fameGain(show.multiplier) }} fame (20% of your current skill)</li>
            <li>Has a {{ show.cooldownDuration }} seconds cooldown</li>
          </ul>
        </div>
      </div>
      <div class="cooldown" v-if="currentCooldown != null">
        <h3>Cooldown: {{ currentCooldown }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentCooldown: null,
    }
  },

  computed: {
    ...mapState(["incremental", "shows"]),
  },

  methods: {
    playShow(show) {
      this.$store.commit("playShow", show);
      this.currentCooldown = show.cooldownDuration;
      this.startCooldown(show);
    },

    startCooldown(show) {
      if (this.currentCooldown > 0) {
        setTimeout(() => {
          -- this.currentCooldown;
          this.startCooldown(show)
        }, 1000);
      } else {
        this.currentCooldown = null;
        this.$store.commit("cooldownReset", show)
      }
    },

    fameGain(multiplier) {
      return Math.round(this.incremental.skill * multiplier).toLocaleString("nl-BE")
    },
  },
};
</script>

<style scoped>
  .shows {
    width: 400px;
  }

  .info, .button {
    display: flex;
  }

  .info h3 {
    align-self: center;
  }

</style>