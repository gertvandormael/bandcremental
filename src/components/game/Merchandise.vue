<template>
  <div class="merchandise">
    <h1>Merchandise</h1>
    <div
      class="merch"
      v-for="merch in merchandising"
      :key="merch.id"
    >
      <div
        class="locked"
        v-if="!merch.unlocked"
      >
        <button
          @click="unlockMerch(merch, merch.moneyRequired)"
          :disabled="unlockCheck(merch.moneyRequired)"
        >Unlock merch</button>
        <ul>
          <li>Unlock for € {{ merch.moneyRequired }}</li>
          <li>Sell merch to become more famous!</li>
        </ul>
      </div>
      <div
        class="unlocked"
        v-if="merch.unlocked"
      >
        <div class="info">
          <img
            :src="require(`@/assets/` + merch.img)"
            :alt="merch.name"
          >
          <h2>{{ merch.name }}</h2>
        </div>
        <div class="staff">
          <ul>
            <li>Staff selling {{ merch.name }}: {{ merch.staff }}</li>
            <li>Fame gained per second: {{ merch.fameGain * merch.staff }} </li>
          </ul>
          <button
            @click="hireStaff(merch, 1)"
            :disabled="staffCheck(merch, 1)"
          >+1 for €{{ merch.moneyCost * 1 }}</button>
          <button
            @click="hireStaff(merch, 5)"
            :disabled="staffCheck(merch, 5)"
          >+5 for €{{ merch.moneyCost * 5 }}</button>
          <button
            @click="hireStaff(merch, 10)"
            :disabled="staffCheck(merch, 10)"
          >+10 for €{{ merch.moneyCost * 10 }}</button>
          <button
            @click="hireStaff(merch, 25)"
            :disabled="staffCheck(merch, 25)"
          >+25 for €{{ merch.moneyCost * 25}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["incremental", "merchandising"])
  },

  methods: {
    unlockMerch(merch, amount) {
      this.$store.commit("unlockMerch", { merch, amount });
    },

    unlockCheck(money) {
      if (this.incremental.money < money) {
        return true;
      }
    },

    hireStaff(merch, amount) {
      this.$store.dispatch("hireStaff", { merch, amount });
    },

    staffCheck(merch, amount) {
      if (this.incremental.money < merch.moneyCost * amount) {
        return true;
      }
    }
  },

  mounted() {
    this.$store.dispatch("fameIdleGains");
  }
};
</script>

<style scoped>
.info, .locked {
  display: flex;
}

.info h2, .locked ul {
  align-self: center;
}

img {
  max-height: 50px;
  max-width: 50px;
  margin-right: 10px;
}

.staff button {
  height: 60px;
  width: 60px;
  margin-top: 10px;
}

.locked, .unlocked {
  margin-bottom: 15px;
}

</style>
