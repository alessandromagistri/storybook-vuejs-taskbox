import Vue from 'vue'

/** 
 * Families is the store which contains all the mutations and states for families functions.
 * @module  
*/
export default {
  /**
  * The Family state
  * @name State
  * @type {object} 
  * @property {array} selectedFamilies The selected families.
  * @property {array} availableFamilies The available families.
  * @property {array} availableAttributes The available attributes.
  */
  state: () =>({
    selectedFamilies: [],
    availableFamilies: [],
    availableAttributes: [], //Mostra SOLO attributi delle famiglie selezionate.
  }),
  /**
   * The Family mutations
   * @name Mutations
   * @mutator {string} familyCallbackListener=selectedFamilies Pushes in the selected families array the selected family only if it is not included yet.
   * @mutator {string} deleteSelectedFamily=selectedFamilies Removes from the selected families array the family selected by the user.
   * @mutator {array} assignAvailableFamilies=availableFamilies Assigns to the available families array the available families obtained by the selected sections.
   * @mutator {array} assignAvailableAttributes=availableAttributes Assigns to the available attribues array the available attributes obtained by the selected families.
   * @mutator {object} changeKeyEnabled=availableAttributes Changes the value (true or false) of the "key" parameter inside the attribute.
   * @mutator {object} changeRangeEnabled=availableAttributes Changes the value (true or false) of the "range" parameter inside the attribute.
   * @mutator {object} changeRequiredEnabled=availableAttributes Changes the value (true or false) of the "required" parameter inside the attribute.
   * @mutator {object} changeValuesOfRange=availableAttributes Changes the values of min and max of the range of the attribute.
   * @type {object} 
   */
  mutations: {

    familyCallbackListener(state, familyId) {
      console.log({
        selectedFamilies: state.selectedFamilies
      })
      if (!state.selectedFamilies.includes(familyId)) {
        state.selectedFamilies.push(familyId)
      }
    },
    deleteSelectedFamily(state, familyId) {
      if (state.selectedFamilies.includes(familyId)) {
        state.selectedFamilies = state.selectedFamilies.filter(removeFamilyId => removeFamilyId!==familyId)
      }
    },
    assignAvailableFamilies(state, availableFamilies) {
      state.availableFamilies = availableFamilies
    },
    assignAvailableAttributes(state, attributes) {
      state.availableAttributes = { ...attributes, ...state.availableAttributes }
    },
    changeKeyEnabled(state, { familyId, attributeId }) {
      const attributes = state.availableAttributes[familyId]
      const attribute = attributes.find(element => element.id === attributeId)
      Vue.set(attribute, 'keyEnabled', !attribute.keyEnabled)
    },
    changeRangeEnabled(state, { familyId, attributeId }) {
      const attributes = state.availableAttributes[familyId]
      const attribute = attributes.find(element => element.id === attributeId)
      Vue.set(attribute, 'rangeEnabled', !attribute.rangeEnabled)
    },
    changeRequiredEnabled(state, { familyId, attributeId }) {
      const attributes = state.availableAttributes[familyId]
      const attribute = attributes.find(element => element.id === attributeId)
      Vue.set(attribute, 'requiredEnabled', !attribute.requiredEnabled)
    },
    changeValuesOfRange(state, {familyId, attributeId, rangeMin, rangeMax}) {
      const attributes = state.availableAttributes[familyId]
      const attribute = attribute.find(element => element.id === attributeId)
      Vue.set(attribute, 'rangeMin', rangeMin)
      Vue.set(attribute, 'rangeMax', rangeMax)
    }
  },
  actions: {  
    changeValueOfSelectedEnabler({commit}, payload) {
      switch(payload.name) {
        case "Key": 
          commit('changeKeyEnabled', payload) 
          break
        case "Range": 
          commit('changeRangeEnabled', payload) 
          break
        case "Required": 
          commit('changeRequiredEnabled', payload) 
          break
      }
    },
    changeValuesOfRange({commit}, payload) {
      commit('changeValuesOfRange', payload)
    },
    familyCallbackListener({commit}, familyId) {
      commit('familyCallbackListener', familyId)
    },
    deleteSelectedFamily({commit}, familyId) {
      commit('deleteSelectedFamily', familyId)
    },
    assignAvailableFamilies({commit}, families) {
      commit('assignAvailableFamilies', families)
    },
    assignAvailableAttributes({commit}, attributes) {
      commit('assignAvailableAttributes', attributes)
    }
  }
}
