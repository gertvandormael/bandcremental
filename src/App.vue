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

/* Fonts and layout */
body {
	margin: 5px;
	font-family: "Ubuntu", sans-serif;
	font-size: 1rem;
	background: #56965d;
	color: #ebebeb;
}

h1 {
	font-size: 1.7rem;
	color: #ff70d2;
	margin-top: 5px;
}

h2 {
	font-size: 1.7rem;
	color: #ff70d2;
	margin-top: 5px;
}

h3 {
	font-size: 1.4rem;
	color: #cbdbfc;
}

h4 {
	font-size: 1rem;
	color: #ff6fd2;
}

.header,
.band,
.skill,
.songs,
.show {
	margin-bottom: 20px;
}

h1, h2, h3, h4 {
	font-family: "Press Start 2P", cursive;
	text-shadow: -2px -2px 0 #6e0054, 2px -2px 0 #6e0054, -2px 2px 0 #6e0054,
		2px 2px 0 #6e0054;
}

/* Styling for all components */
button {
	font-family: "Press Start 2P", cursive;
	background: #ff6fd2;
	color: #cbdbfc;
	border: none;
	width: 100px;
	height: 50px;
	margin-right: 10px;
}

button:disabled {
	background: #969696;
}

button:hover:enabled {
	background: #cbdbfc;
	color: #ff6fd2;
}

/* Media queries */
@media (min-width: 768px) {
	#app {
		display: flex;
		justify-content: center;
	}

	.clicker-and-songs {
		display: flex;
		margin-bottom: 25px;
	}

	.show-and-merch {
		display: flex;
	}
}
</style>
