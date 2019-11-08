<template>
  <div class="clicker">
    <div class="band">
      <img
        src="../assets/band.png"
        alt="band image"
        @click="increaseSkill"
      >
      <div class="data">
        <div class="skill">
          <h3>Skill {{ incremental.skill }}</h3>
          <h3>Cash {{ incremental.cash }} </h3>
          <h3>Fame {{ incremental.fame }} </h3>
        </div>
        <div class="stats">
          <h2>Info</h2>
          <ul>
            <li>Click power: {{ incremental.skillPerClick }}</li>
            <li>Idle gain: {{ incremental.idleSkillGain }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
  
  computed: {
    ...mapState(["incremental"]),
  }
};
</script>

<style scoped>
  h3 {
    font-size: 24px;
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



</style>