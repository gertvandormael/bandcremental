<template>
  <div class="shows">
    <h2>Shows</h2>
    <div
      class="show"
      v-for="show in shows"
      :key="show.id"
    >
      <img
        src="../../assets/show-locked.png"
        alt="show locked"
        v-if="!show.active"
      />
      <img
        src="../../assets/band2.gif"
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
        <ul>
          <li>Gain {{ moneyGain(show.multiplier) }} money (20% of your current skill)</li>
          <li>Has a {{ show.cooldownDuration }} seconds cooldown</li>
        </ul>
      </div>
      <div
        class="cooldown"
        v-if="show.active"
      >
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
      currentCooldown: null
    };
  },

  computed: {
    ...mapState(["incremental", "shows"])
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
          --this.currentCooldown;
          this.startCooldown(show);
        }, 1000);
      } else {
        this.currentCooldown = null;
        this.$store.commit("cooldownReset", show);
      }
    },

    moneyGain(multiplier) {
      return Math.round(this.incremental.skill * multiplier).toLocaleString(
        "nl-BE"
      );
    }
  }
};
</script>

<style scoped>
  .shows {
    width: 350px;
  }
  
  img {
    max-width: 250px;
    max-width: 250px;
  }

  .button {
    margin-top: 5px;
    display: flex;
  }

  .button ul {
    align-self: center;
  }

  @media (min-width: 998px) {
    .shows {
      width: 505px;
    }
  }


</style>