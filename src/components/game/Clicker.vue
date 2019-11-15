<template>
  <div class="band">
    <img
      src="../../assets/band.png"
      alt="band image"
      @click="increaseSkill"
    >
    <div class="data">
      <div class="stats">
        <h2>Resources</h2>
        <ul class="skill">
          <li>Skill: {{ notation(incremental.skill) }}</li>
          <li>Money: {{ notation(incremental.money) }}</li>
          <li>Fame: {{ notation(incremental.fame) }} </li>
        </ul>
        <h2>Info</h2>
        <ul>
          <li>Click power: {{ notation(incremental.clickPower) }}</li>
          <li>Idle gain: {{ notation(incremental.idlePower) }}</li>
        </ul>
      </div>
    </div>
    <ClickerButtons />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ClickerButtons from "./ClickerButtons.vue";
export default {
  components: {
    ClickerButtons
  },

  computed: {
    ...mapState(["incremental"])
  },

  methods: {
    increaseSkill() {
      this.$store.dispatch("increaseSkill");
    },

    notation(number) {
      return number.toLocaleString("nl-BE");
    }
  },

  mounted() {
    this.$store.dispatch("idleGains");
  }
};
</script>

<style scoped>
  h3 {
    font-size: 24px;
  }

  .skill {
    width: 350px;
  }

/* Shake effect on click */
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  .band img:active {
      animation: shake 0.10s cubic-bezier(.36,.07,.19,.97) both;
  }

/* Media queries */
  @media (min-width: 998px) {
    .band {
      display: flex;
      justify-content: space-between;
    }

    .data {
      margin-left: 25px;
    }
  }
  
</style>