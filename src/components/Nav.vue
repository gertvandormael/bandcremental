<template>
  <div class="header">
    <div class="title">
      <h1>Bandcremental</h1>
      <p>Become the greatest band ever!</p>
    </div>
    <ul>
      <li>
        <router-link
          to="/howtoplay"
          tag="button"
        >How to play</router-link>
      </li>
      <li>
        <router-link
          to="/stats"
          tag="button"
        >Stats</router-link>
      </li>
      <li>
        <router-link
          to="/cheats"
          tag="button"
        >Cheats</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .header {
    margin-bottom: 15px;
    width: 300px;
    margin-bottom: 15px;
  }

  ul {
    display: flex;
  }

  button {
    margin-right: 0px;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    .header {
      display: flex;
      justify-content: space-between;
    }
  }

  
  @media (min-width: 992px) { 
    .header {
      width: 1100px;
    }
  }
</style>