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
			money: 0
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
				multiplier: 0.2,
				active: false
			}
		],

		merchandising: [
			{
				id: 0,
				name: "placeholder",
				unlocked: false,
				fameGain: 10,
				moneyRequired: 100,
				moneyCost: 25,
				staff: 0,
				img: "placeholder.png"
			}
			// {
			// 	id: 1,
			// 	name: "placeholder 2",
			// 	moneyGain: 500,
			// 	fameRequired: 1000,
			// 	fameCost: 100,
			// 	img: "placeholder.png"
			// }
		],

		stats: {
			timesClicked: 0,
			skillGainClick: 0,
			skillGainIdle: 0,
			songsLearned: 0,
			showsPlayed: 0,
			moneyGainedShows: 0
		}
	},

	mutations: {
		increaseSkill(state) {
			state.incremental.skill += state.incremental.clickPower;
			state.stats.timesClicked++;
			state.stats.skillGainClick += state.incremental.clickPower;
		},

		idleGains(state) {
			state.incremental.skill += state.incremental.idlePower;
			state.stats.skillGainIdle += state.incremental.idlePower;
		},

		learnSong(state, song) {
			state.incremental.clickPower += song.clickPowerGain;
			state.incremental.idlePower += song.idlePowerGain;
			song.songLearned = true;
			state.stats.songsLearned++;
		},

		playShow(state, show) {
			state.incremental.money += Math.round(
				state.incremental.skill * show.multiplier
			);
			show.active = true;
			state.stats.showsPlayed++;
			state.stats.moneyGainedShows += Math.round(
				state.incremental.skill * show.multiplier
			);
		},

		cooldownReset(state, show) {
			show.active = false;
		},

		cheatSkill(state) {
			state.incremental.skill += 1000;
		},

		cheatClickPower(state) {
			state.incremental.clickPower += 100;
		},

		cheatIdlePower(state) {
			state.incremental.idlePower += 100;
		},

		cheatFame(state) {
			state.incremental.fame += 1000;
		},

		unlockMerch(state, { merch, amount }) {
			merch.unlocked = true;
			state.incremental.money -= amount
		},

		hireStaff(state, { merch, amount }) {
			merch.staff += amount;
			state.incremental.money -= 100
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

		cheatSkill({ commit }) {
			commit("cheatSkill");
		},

		cheatClickPower({ commit }) {
			commit("cheatClickPower");
		},

		cheatIdlePower({ commit }) {
			commit("cheatIdlePower");
		},

		cheatFame({ commit }) {
			commit("cheatFame");
		},

		hireStaff({ commit }, { merch, amount }) {
			commit("hireStaff", { merch, amount });
		}
	},

	getters: {},

	modules: {}
});
