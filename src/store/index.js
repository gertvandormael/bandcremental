import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		incremental: {
			skill: 0,
			clickPower: 1,
			idlePower: 0,
			fame: 0,
			cash: 0
		},

		songUpgrades: [
			{
				id: 0,
				name: "Smoke On The Water - Deep Purple",
				audio: "smoke-on-the-water.wav",
				requiredSkill: 10,
				clickPowerGain: 1,
				idlePowerGain: 1,
				songLearned: false
			},
			{
				id: 1,
				name: "Highway to Hell - AC/DC",
				audio: "highway-to-hell.wav",
				requiredSkill: 50,
				clickPowerGain: 5,
				idlePowerGain: 2,
				songLearned: false
			},
			{
				id: 2,
				name: "The Trooper - Iron Maiden",
				audio: "the-trooper.wav",
				requiredSkill: 100,
				clickPowerGain: 10,
				idlePowerGain: 5,
				songLearned: false
			}
		],

		shows: [
			{
				id: 0,
				name: "Local bar",
        cooldownDuration: 60,
				multiplier: 0.20,
				active: false
      },
		],

		merchandise : [
			{
				id: 0,
				name: "merch 1",
				cashGain: 100,
				fameRequired: 500,
			}
		],
		
		stats: {
			timesClicked: 0,
			skillGainClick: 0,
			skillGainIdle: 0,
			songsLearned: 0,
			showsPlayed: 0,
			fameGainedShows: 0,
		}
	},

	mutations: {
		increaseSkill(state) {
			state.incremental.skill += state.incremental.clickPower;
			state.stats.timesClicked ++;
			state.stats.skillGainClick += state.incremental.clickPower;

		},

		idleGains(state) {
			state.incremental.skill += state.incremental.idlePower;
			state.stats.skillGainIdle += state.incremental.idlePower
		},

		learnSong(state, song) {
			state.incremental.clickPower += song.clickPowerGain;
			state.incremental.idlePower += song.idlePowerGain;
			song.songLearned = true;
			state.stats.songsLearned ++;
		},

		playShow(state, show) {
			state.incremental.fame += Math.round(
				state.incremental.skill * show.multiplier
      );
			show.active = true;
			state.stats.showsPlayed ++;
			state.stats.fameGainedShows += Math.round(
				state.incremental.skill * show.multiplier
      );
    },

    cooldownReset(state, show) {
      show.active = false
		},
		
		cheatSkill(state) {
			state.incremental.skill += 1000;
		},

		cheatClickPower(state) {
			state.incremental.clickPower += 100;
		},

		cheatIdlePower(state) {
			state.incremental.idlePower += 100
		},

		cheatFame(state) {
			state.incremental.fame += 1000;
		},
	},

	actions: {
		increaseSkill({ commit }) {
			commit("increaseSkill");
		},

		idleGains({ commit }) {
			setInterval(() => {
				commit("idleGains");
			}, 1000);
		},
		
		cheatSkill({ commit }) {
			commit("cheatSkill")
		},

		cheatClickPower({ commit }) {
			commit("cheatClickPower");
		},

		cheatIdlePower({ commit }) {
			commit("cheatIdlePower")
		},

		cheatFame({ commit }) {
			commit("cheatFame")
		},

	},

	getters: {},

	modules: {}
});
