export default {
  state: () =>({
    selectedFamilies: [],
  }),

  mutations: {
    familyCallbackListener(state, familyId) {
      if (!state.selectedFamilies.includes(familyId)) {
        state.selectedFamilies.push(familyId)
      }
    },
    deleteSelectedFamily(state, familyId) {
      if (state.selectedFamilies.includes(familyId)) {
        state.selectedFamilies = state.selectedFamilies.filter(removeFamilyId => removeFamilyId!==familyId)
      }
    },
  },

  actions: {
    familyCallbackListener({commit}, familyId) {
      commit('familyCallbackListener', familyId)
    },
    deleteSelectedFamily({commit}, familyId) {
      commit('deleteSelectedFamily', familyId)
    }
  }
}