import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    incremental: {
      skill: 0,
      skillPerClick: 1,
      idleSkillGain: 0,
      cash: 0,
      fame: 0    
    },
  },
  
  mutations: {
    increaseSkill (state) {
      state.incremental.skill++
    }
  },

  getters: {
  },

  actions: {
  },

  modules: {
  }
})
