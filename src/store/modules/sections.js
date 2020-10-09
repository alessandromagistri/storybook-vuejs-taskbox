export default {
  state: () =>({
    selectedSections: [],
    availableSections: [],
  }),

  mutations: {
    initializeSelectedSections(state) {
      state.selectedSections = []
    },
    sectionCallbackListener(state, sectionId) {
      if (!state.selectedSections.includes(sectionId)) {
        state.selectedSections.push(sectionId)
      }
      console.log("SELECTED SECTIONS: ", state.selectedSections)
    },
    assignAvailableSections(state, sections) {
      state.availableSections = sections
    },

    //Le mutations sono atomiche, funzionano indipendentemente dal contesto
    deleteSelectedSection(state, sectionId) {
      if (state.selectedSections.includes(sectionId)) {
        state.selectedSections = state.selectedSections.filter(removeSectionId => removeSectionId!==sectionId)
      }
      // commit('deleteSelectedFamiliesFromSection', sectionId, {root:true})
      // console.log(state.selectedSections)
    },
  },

  actions: {
    initializeSelectedSections( {commit} ) {
      commit('initializeSelectedSections')
    },
    sectionCallbackListener( {commit}, sectionId) {
      commit('sectionCallbackListener', sectionId)
    },
    assignAvailableSections( {commit}, sections) {
      commit('assignAvailableSections', sections)
    },
    deleteSelectedSection( {commit}, value) {
      commit('deleteSelectedSection', value)
      commit('deleteSelectedFamiliesByFamilyId', value, {root:true})
    },
  }
}