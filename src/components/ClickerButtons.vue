<template>
  <div class="options">
    <router-link
      to="/settings"
      tag="button"
    >Settings</router-link>

    <router-link
      to="/stats"
      tag="button"
    >Stats</router-link>

    <router-link
      to="/cheats"
      tag="button"
    >Cheats</router-link>
    

  </div>

</template>

<script>
export default {};
</script>

<style scoped>
  .options {
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    height: 120px;
  }

  button {
    width: 150px;
    height: 50px;
  }
</style>>
