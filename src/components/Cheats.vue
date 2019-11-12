<template>
  <div class="cheats">
    <BackToGame />
    <h2>Cheats</h2>
    <ul>
      <li>Skill: {{ incremental.skill.toLocaleString('nl-BE') }}</li>
      <li>Click power: {{ incremental.clickPower.toLocaleString('nl-BE') }}</li>
      <li>Idle power: {{ incremental.idlePower.toLocaleString('nl-BE') }}</li>
      <li>Fame: {{ incremental.fame.toLocaleString('nl-BE') }}</li>
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