<template>
  <div class="band">
    <div class="clicker">
      <img
        src="../../assets/band.png"
        alt="band image"
        @click="increaseSkill"
      >
      <div
        v-if="!incremental.firstClick"
      >
        <div class="tutorial">
          <p>Click the image to increase your skill!</p>
          <img
            src="../../assets/arrow.png"
            alt="arrow"
            @click="easterEgg"
          >
        </div>
        <div
          class="easteregg"
          v-if="incremental.easterEgg"
        >
          Click the band not the cursor &#128578;
        </div>

      </div>
    </div>
    <div class="stats">
      <h3>Resources</h3>
      <ul class="skill">
        <li>Skill: {{ notation(incremental.skill) }}</li>
        <li>Money: {{ notation(incremental.money) }}</li>
        <li>Fame: {{ notation(incremental.fame) }} </li>
      </ul>
      <h3>Info</h3>
      <ul>
        <li>Click power: {{ notation(incremental.clickPower) }}</li>
        <li>Idle skill gain: {{ notation(incremental.idlePower) }}</li>
        <li>Idle fame gain: {{ notation(incremental.famePower) }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["incremental"])
  },

  methods: {
    increaseSkill() {
      this.$store.dispatch("increaseSkill");
    },

    notation(number) {
      return number.toLocaleString("nl-BE");
    },

    easterEgg() {
      this.$store.commit("easterEgg");
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

  .clicker {
    height: auto;
    width: 250px;
  }

  img {
    height: 250px;
    width: 250px;
  }

  .tutorial {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tutorial img {
    height: 50px;
    width: 50px;
    margin-top: -25px;
  }

  .tutorial p {
    width: 150px;
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

  .clicker img:active {
      animation: shake 0.10s cubic-bezier(.36,.07,.19,.97) both;
  }

/* Media queries */
  @media (min-width: 998px) {
    .band {
      display: flex;
      height: 250px;
      width: 500px;
    }

    .stats {
      align-self: center;
      margin-left: 15px;
    }
  }
  
</style>