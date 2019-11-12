<template>
  <div class="song-upgrades">
    <h2>Songs</h2>
    <div
      class="song"
      v-for="songUpgrade in songUpgrades"
      :key="songUpgrade.id"
    >
      <div class="info">
        <div class="pic">
          <img
            v-if="!songUpgrade.songLearned"
            src="../assets/song-locked.png"
            alt="song locked"
          >
          <img
            v-if="songUpgrade.songLearned"
            src="../assets/song-unlocked.png"
            alt="song unlocked"
          >
        </div>
        <h3 :class="{ locked: !songUpgrade.songLearned }">{{ songUpgrade.name }}</h3>
      </div>
      <div
        class="button"
        v-if="!songUpgrade.songLearned"
      >
        <button
          @click="learnSong(songUpgrade)"
          :disabled="incremental.skill < songUpgrade.requiredSkill"
        >Learn song!</button>
        <div class="requirements">
          <ul>
            <li>Requires {{ songUpgrade.requiredSkill }} skill</li>
            <li>Gain {{ songUpgrade.clickPowerGain }} click power and {{ songUpgrade.idlePowerGain }} idle power</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["incremental", "songUpgrades"])
  },

  methods: {
    learnSong(song) {
      this.$store.commit("learnSong", song);
      this.playSong(song);
    },

    playSong(song) {
      var audio = new Audio(require("../assets/songs/" + song.audio));
      audio.play();
    }
  }
};
</script>

<style scoped>
  .info, .button {
    display: flex;
  }

  .info h3 {
    align-self: center;
  }
  
  .requirements {
    align-self: center;
  }

  .locked {
    color: #dadada;
    text-shadow:
      -2px -2px 0 #000000,
      2px -2px 0 #000000,
      -2px 2px 0 #000000,
      2px 2px 0 #000000;
  }

  .pic {
    align-self: center;
  }

  .pic img {
    max-width: 50px;
    max-height: 50px;
    margin-right: 2px;
  }  
  </style>