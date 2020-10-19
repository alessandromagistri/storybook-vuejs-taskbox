
/** 
 * Sections is the store which contains all the mutations and states for sections functions.
 * @module  
*/
export default {
  /**
  * The Section state
  * @name State
  * @type {object} 
  * @property {array} selectedSections The selected sections.
  * @property {array} availableSections The available sections.
  */
  state: () =>({
    selectedSections: [],
    availableSections: [],
  }),
  /**
   * The Section mutations
   * @name Mutations
   * @mutator {null} initializeSelectedSections=selectedSections Initializes the selected sections array to an empty array, this happens whenever a new super sections is selected
   * @mutator {string} sectionCallbackListener=selectedSections Pushes in the selected sections array the selected section only if it is not included yet.
   * @mutator {array} assignAvailableSections=availableSections Assigns to the available sections array the available sections obtained by the selected supersection. 
   * @mutator {string} deleteSelectedSection=selectedSections Removes from the selected sections array the section selected by the user.
   * @type {object} 
   */
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
    deleteSelectedSection(state, sectionId) {
      if (state.selectedSections.includes(sectionId)) {
        state.selectedSections = state.selectedSections.filter(removeSectionId => removeSectionId!==sectionId)
      }
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