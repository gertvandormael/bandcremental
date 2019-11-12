<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* CSS Reset*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
  }

/* Positioning */
  #app {
    display: flex;
    justify-content: center;
  }

/* Fonts and layout */
  body {
    margin: 5px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1rem;
    background: #56965d;
    color: #ebebeb;
  }

  h1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 26px;
    color: #ff6fd2;
    margin-top: 5px;
  }

  h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 22px;
    color: #cbdbfc;
  }

  h3 {
    font-family: 'Press Start 2P', cursive;
    font-size: 16px;
    color: #ff6fd2;
  }

  .header, .band, .skill, .info, .upgrades-song, .button, .gear-upgrades, .shows, .cooldown {
    margin-bottom: 10px;
  }

  h1, h2, h3 {
	text-shadow:
    -2px -2px 0 #6e0054,
		2px -2px 0 #6e0054,
		-2px 2px 0 #6e0054,
		2px 2px 0 #6e0054;
  }

/* Styling for all components */
  .upgrades {
    width: 500px;
  }
  
  img {
    max-width: 250px;
    max-width: 250px;
  }

  button {
    font-family: 'Press Start 2P', cursive;
    background: #ff6fd2;
    color: #cbdbfc;
    border: none;
    width: 100px;
    height: 50px;
    margin-right: 10px;
  }

  button:disabled {
    background: #969696
  }

  button:hover:enabled {
    background: #cbdbfc;
    color: #ff6fd2;
  }

/* Media queries */

.container {
  display: flex;
}

</style>
