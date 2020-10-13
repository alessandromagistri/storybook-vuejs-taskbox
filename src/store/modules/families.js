export default {
  state: () =>({
    selectedFamilies: [],
    availableFamilies: [],
    availableAttributes: [], //Mostra SOLO attributi delle famiglie selezionate.
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

    assignAvailableFamilies(state, families) {
      state.availableFamilies = families
    },

    assignAvailableAttributes(state, attributes) {
      state.availableAttributes = attributes
    },

    changeKeyEnabled(state, familyId, attributeId) {
      state.availableAttributes.reduce((filterAvailableAttributes, attribute) => {
        console.log(attribute)
        if (attribute.id == attributeId && attribute.familyId == familyId) {
          attribute.keyEnabled = !attribute.keyEnabled
        }
      })
    },

    changeRangeEnabled(state, familyId, attributeId) {
      state.availableAttributes.reduce((filterAvailableAttributes, attribute) => {
        if (attribute.id == attributeId && attribute.familyId == familyId) {
          attribute.rangeEnabled = !attribute.rangeEnabled
        }
        console.log(attribute)
      })
    },

    changeRequiredEnabled(state, familyId, attributeId) {
      state.availableAttributes.reduce((filterAvailableAttributes, attribute) => {
        if (attribute.id == attributeId && attribute.familyId == familyId) {
          attribute.requiredEnabled = !attribute.requiredEnabled
        }        
        console.log(attribute)
      })
    },
  },

  actions: {  
    changeValueOfSelectedEnabler({dispatch}, payload) {
      switch(payload.name) {
        case "Key": 
          dispatch('changeKeyEnabled', payload.familyId, payload.attributeId) 
          break
        case "Range": 
          dispatch('changeRangeEnabled', payload.familyId, payload.attributeId) 
          break
        case "Required": 
          dispatch('changeRequiredEnabled', payload.familyId, payload.attributeId) 
          break
      }
    },
    changeKeyEnabled({commit}) {
      commit('changeKeyEnabled')
    },
    changeRangeEnabled({commit}) {
      commit('changeRangeEnabled')
    },
    changeRequiredEnabled({commit}) {
      commit('changeRequiredEnabled')
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