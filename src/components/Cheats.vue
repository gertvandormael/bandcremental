<template>
  <div class="cheats">
    <BackToGame />
    <h2>Cheats</h2>
    <ul>
      <li>Skill: {{ notation(incremental.skill) }}</li>
      <li>Click power: {{ notation(incremental.clickPower) }}</li>
      <li>Idle power: {{ notation(incremental.idlePower) }}</li>
      <li>Fame: {{ notation(incremental.fame) }}</li>
    </ul>

    <button @click="cheatSkill">Gain 1.000 skill</button>
    <button @click="cheatClickPower">Gain 100 click power</button>
    <button @click="cheatIdlePower">Gain 100 idle power</button>
    <button @click="cheatFame">Gain 1.000 fame</button>
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
    ...mapState(["incremental", "songUpgrades", "shows"]),
  },

  methods: {
    notation(number) {
      return number.toLocaleString("nl-BE");
    },

    cheatSkill() {
      this.$store.dispatch("cheatSkill");
    },

    cheatClickPower() {
      this.$store.dispatch("cheatClickPower");
    },

    cheatIdlePower() {
      this.$store.dispatch("cheatIdlePower");
    },

    cheatFame() {
      this.$store.dispatch("cheatFame");
    },
  }
};
</script>

<style>
  button {
    width: 200px;
    height: 50px;
  }
</style>