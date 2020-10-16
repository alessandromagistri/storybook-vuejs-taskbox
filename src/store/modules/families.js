import Vue from 'vue'

/** 
 * Families is the store which contains all the methods and states for families functions
 * @module  
*/
export default {
  state: () =>({
    selectedFamilies: [],
    availableFamilies: [],
    availableAttributes: [], //Mostra SOLO attributi delle famiglie selezionate.
  }),

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

    assignAvailableFamilies(state, families) {
      state.availableFamilies = families
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

/*
  attivare/disattivare prop degli attributi per poi arrivare al filtro finale
*/