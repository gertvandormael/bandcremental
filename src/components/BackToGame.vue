<template>
  <div class="back-to-game">
    <router-link
      to="/game"
      tag="button"
    >
      <div class="img">
        <img
          src="../assets/back.png"
          alt=""
        >
        <p>Back to game</p>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  img {
    max-width: 50px;
    max-height: 50px;
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  button {
    width: auto;
    height: auto;
    margin-bottom: 25px;
  }

</style>