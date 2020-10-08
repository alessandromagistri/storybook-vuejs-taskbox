import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
//cambia name con id
  state: {
    superSections: [
      {
        id: '1',
        name: 'Supersection A',
        sections: [
          {
            id: '2',
            name: 'Supersection A Section A',
            families: [
              {
                id: '2',
                name: 'Supersection A Section A Family A',
                attributes: [
                  {
                    id: '111',
                    familyId: '2',
                    name: 'Attribute A of family A',
                  },
                  {
                    id: '112',
                    familyId: '2',
                    name: 'Attribute B of family A',
                  },
                  {
                    id: '113',
                    familyId: '2',
                    name: 'Attribute C of family A',
                  },
                ]
              },
              {
                id: '3',
                name: 'Supersection A Section A Family B',
                attributes: [
                  {
                    id: '222',
                    familyId: '3',
                    name: 'Attribute A of family B',
                  },
                  {
                    id: '223',
                    familyId: '3',
                    name: 'Attribute B of family B',
                  },
                  {
                    id: '224',
                    familyId: '3',
                    name: 'Attribute C of family B',
                  },
                ]
              },
            ],
          },
          {
            id: '3',
            name: 'Supersection A Section B',
            families: [
              {
                id: '6',
                name: 'Supersection A Section B Family A',
                attributes: [
                  {
                    id: '111',
                    familyId: '2',
                    name: 'Attribute A of family A',
                  },
                  {
                    id: '112',
                    familyId: '2',
                    name: 'Attribute B of family A',
                  },
                  {
                    id: '113',
                    familyId: '2',
                    name: 'Attribute C of family A',
                  },
                ]
              },
              {
                id: '7',
                name: 'Supersection A Section B Family B',
                attributes: [
                  {
                    id: '222',
                    familyId: '3',
                    name: 'Attribute A of family B',
                  },
                  {
                    id: '223',
                    familyId: '3',
                    name: 'Attribute B of family B',
                  },
                  {
                    id: '224',
                    familyId: '3',
                    name: 'Attribute C of family B',
                  },
                ]
              },
            ],
          },
        ],
      },
      {
        id: '2',
        name: 'Supersection B',
        sections: [
          {
            id: '4',
            name: 'Supersection B Section A',
            families: [
              {
                id: '9',
                name: 'Supersection B Section A Family A',
                attributes: [
                  {
                    id: '111',
                    familyId: '2',
                    name: 'Attribute A of family A',
                  },
                  {
                    id: '112',
                    familyId: '2',
                    name: 'Attribute B of family A',
                  },
                  {
                    id: '113',
                    familyId: '2',
                    name: 'Attribute C of family A',
                  },
                ]
              },
              {
                id: '12',
                name: 'Supersection B Section A Family B',
                attributes: [
                  {
                    id: '222',
                    familyId: '3',
                    name: 'Attribute A of family B',
                  },
                  {
                    id: '223',
                    familyId: '3',
                    name: 'Attribute B of family B',
                  },
                  {
                    id: '224',
                    familyId: '3',
                    name: 'Attribute C of family B',
                  },
                ]
              },
            ],
          },
          {
            id: '5',
            name: 'Supersection B Section B',
            families: [
              {
                id: '23',
                name: 'Supersection B Section B Family A',
                attributes: [
                  {
                    id: '111',
                    familyId: '2',
                    name: 'Attribute A of family A',
                  },
                  {
                    id: '112',
                    familyId: '2',
                    name: 'Attribute B of family A',
                  },
                  {
                    id: '113',
                    familyId: '2',
                    name: 'Attribute C of family A',
                  },
                ]
              },
              {
                id: '37',
                name: 'Supersection B Section B Family B',
                attributes: [
                  {
                    id: '222',
                    familyId: '3',
                    name: 'Attribute A of family B',
                  },
                  {
                    id: '223',
                    familyId: '3',
                    name: 'Attribute B of family B',
                  },
                  {
                    id: '224',
                    familyId: '3',
                    name: 'Attribute C of family B',
                  },
                ]
              },
            ],
          },
        ],
      },
    ],
    currentSelectedSuperSection: null,

    selectedSections: [],
    availableSections: [],

    selectedFamilies: [],
  },

  mutations: {
    callbackListener(state, evt) {
      state.currentSelectedSuperSection = evt.target.value
      state.selectedSections = []
    },
    sectionCallbackListener(state, sectionId) {
      if (!state.selectedSections.includes(sectionId)) {
        state.selectedSections.push(sectionId)
      }
      console.log(state.selectedSections)
    },
    familyCallbackListener(state, familyId) {
      state.selectedFamilies.push(familyId)
    },
    assignAvailableSections(state, sections) {
      state.availableSections = sections
    },

    deleteSelectedSection(state, sectionId) {
      if (state.selectedSections.includes(sectionId)) {
        state.selectedSections = state.selectedSections.filter(removeSectionId => removeSectionId!==sectionId)
      }
      commit('deleteSelectedFamiliesFromSection', sectionId, {root:true})
      console.log(state.selectedSections)
    },
    deleteSelectedFamily(state, familyId) {
      if (state.selectedFamilies.includes(familyId)) {
        state.selectedFamilies = state.selectedFamilies.filter(removeFamilyId => removeFamilyId!==familyId)
        console.log(state.selectedFamilies)
      }
    },
    deleteSelectedFamiliesFromSection(state, sectionId) {
      state.superSections.reduce((reducedSuperSections, superSection) => {
        superSection.sections.reduce((reducedSections, section) => {
          if(sectionId == section.name) {
            section.families.reduce((reducedFamilies, family ) => {
              commit('deleteSelectedFamily', family.name)
            })
          }
        })
      })
      console.log(state.selectedFamilies)
    }
  },

  actions: {
    deleteSelectedSection({commit}, payload) {
      commit('deleteSelectedSection', payload)
    },
    deleteSelectedValue({commit}, payload) {
      debugger
      switch (payload.key) {
        case "selectedFamilies": 
          commit('deleteSelectedFamily', payload.value)
          break
      case "selectedSections": 
          commit('deleteSelectedSection', payload.value)
          break
      }
    }
  },
})
