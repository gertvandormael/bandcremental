<template>
  <div class="merchandise">
    <h1>Merchandising</h1>
    <div
      class="merch"
      v-for="merch in merchandising"
      :key="merch.id"
    >
      <div
        class="locked"
        v-if="!merch.unlocked"
      >
        <h2>Locked: Requires {{ merch.moneyRequired }} money</h2>
        <button @click="unlockMerch(merch, merch.moneyRequired)" :disabled="moneycheck(merch.moneyRequired)">Unlock</button>
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
            <li>Fame gained per delivery: {{ merch.fameGain * merch.staff }} </li>
          </ul>
          <button @click="hireStaff(merch, 1)">x1</button>
          <button @click="hireStaff(merch, 25)">x25</button>
          <button @click="hireStaff(merch, 50)">x50</button>
          <button @click="hireStaff(merch, 100)">x100</button>
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

    moneycheck(money) {
      if (this.incremental.money < money) {
        return true
      }
    },

    hireStaff(merch, amount) {
      this.$store.dispatch("hireStaff", { merch, amount });
    }
  }
};
</script>

<style scoped>
.info {
  display: flex;
}

.info h2 {
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
}

</style>
