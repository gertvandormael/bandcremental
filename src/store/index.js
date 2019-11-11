import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		incremental: {
			skill: 0,
			clickPower: 1,
			idlePower: 0,
			cash: 0,
			fame: 0
		},

		songUpgrades: [
			{
				id: 0,
				name: "Smoke On The Water - Deep Purple",
				requiredSkill: 10,
				clickPowerGain: 1,
				idlePowerGain: 0.5,
				songLearned: false
			},
			{
				id: 1,
				name: "Highway to Hell - AC/DC",
				requiredSkill: 50,
				clickPowerGain: 5,
				idlePowerGain: 2,
				songLearned: false
			}
		],

		shows: [
			{
				id: 0,
				name: "Local bar",
        cooldownDuration: 60,
				multiplier: 0.2,
				active: false
      },
    ],
	},

	mutations: {
		increaseSkill(state) {
			state.incremental.skill += state.incremental.clickPower;
		},

		idleGains(state) {
			state.incremental.skill += state.incremental.idlePower;
		},

		learnSong(state, song) {
			state.incremental.clickPower += song.clickPowerGain;
			state.incremental.idlePower += song.idlePowerGain;
			song.songLearned = true;
		},

		playShow(state, show) {
			state.incremental.fame += Math.round(
				state.incremental.skill * show.multiplier
      );
      show.active = true;
    },

    cooldownReset(state, show) {
      show.active = false
    }
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
	},

	getters: {},

	modules: {}
});
