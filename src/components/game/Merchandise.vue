<template>
  <div class="merchandise">
    <h1>Merchandising</h1>
    <div
      class="merch"
      v-for="merch in merchandising"
      :key="merch.id"
    >
    <div class="locked" v-if="incremental.fame < merch.fameRequired">
      <h2>Locked: Requires {{ merch.fameRequired }} fame</h2>
    </div>
      <div class="unlocked" v-if="incremental.fame >= merch.fameRequired">
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
            <li>Money gained per delivery: {{ merch.moneyGain * merch.staff }} </li>
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
    hireStaff(merch, amount) {
      this.$store.dispatch("hireStaff", {merch, amount})
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

button {
  height: 60px;
  width: 60px;
}

</style>
