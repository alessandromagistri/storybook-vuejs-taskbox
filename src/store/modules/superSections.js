export default {
  state: () =>({
    currentSelectedSuperSection: null,
  }),

  mutations: {
    callbackListener(state, evt) {
      state.currentSelectedSuperSection = evt.target.value
    },
  },
  
  actions: {
    callbackListener({commit}, evt) {
      commit('callbackListener', evt)
    }
  }
}