<template>
  <div class="cheats">
    <h2>Cheats</h2>
    <ul>
      <li>Skill: {{ notation(incremental.skill) }}</li>
      <li>Click power: {{ notation(incremental.clickPower) }}</li>
      <li>Idle power: {{ notation(incremental.idlePower) }}</li>
      <li>Money: {{ notation(incremental.money) }}</li>
    </ul>

    <button @click="cheatSkill">Gain 1.000 skill</button>
    <button @click="cheatClickPower">Gain 100 click power</button>
    <button @click="cheatIdlePower">Gain 100 idle power</button>
    <button @click="cheatMoney">Gain 1.000 money</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
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

    cheatMoney() {
      this.$store.dispatch("cheatMoney");
    },
  }
};
</script>

<style scoped>
  button {
    width: 170px;
    height: 50px;
    margin-top: 10px;
  }
</style>