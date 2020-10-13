import Vue from 'vue'
import Vuex from 'vuex'
import superSections from './modules/superSections'
import sections from './modules/sections'
import families from './modules/families'
import attributes from './modules/attributes'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    superSections,
    sections,
    families,
    attributes
  },
  state: {
    products: [
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
                    name: 'Attribute A of family A',
                    id: "111",
                    familyId: '2',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute B of family A',
                    id: "112",
                    familyId: '2',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute C of family A',
                    id: "113",
                    familyId: '2',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                ]
              },
              {
                id: '3',
                name: 'Supersection A Section A Family B',
                attributes: [
                  {
                    name: 'Attribute A of family B',
                    id: "222",
                    familyId: '3',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute B of family B',
                    id: "223",
                    familyId: '3',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute C of family B',
                    id: "224",
                    familyId: '3',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
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
                    name: 'Attribute A of family A',
                    id: "111",
                    familyId: '6',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute B of family A',
                    id: "112",
                    familyId: '6',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute C of family A',
                    id: "113",
                    familyId: '6',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                ]
              },
              {
                id: '7',
                name: 'Supersection A Section B Family B',
                attributes: [
                  {
                    name: 'Attribute A of family B',
                    id: "222",
                    familyId: '7',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute B of family B',
                    id: "223",
                    familyId: '7',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute C of family B',
                    id: "224",
                    familyId: '7',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
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
                    name: 'Attribute A of family A',
                    id: "111",
                    familyId: '9',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute B of family A',
                    id: "112",
                    familyId: '9',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute C of family A',
                    id: "113",
                    familyId: '9',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                ]
              },
              {
                id: '12',
                name: 'Supersection B Section A Family B',
                attributes: [
                  {
                    name: 'Attribute A of family B',
                    id: "222",
                    familyId: '12',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute B of family B',
                    id: "223",
                    familyId: '12',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute C of family B',
                    id: "224",
                    familyId: '12',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
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
                    name: 'Attribute A of family A',
                    id: "111",
                    familyId: '23',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute B of family A',
                    id: "112",
                    familyId: '23',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute C of family A',
                    id: "113",
                    familyId: '23',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                ]
              },
              {
                id: '37',
                name: 'Supersection B Section B Family B',
                attributes: [
                  {
                    name: 'Attribute A of family B',
                    id: "222",
                    familyId: '37',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute B of family B',
                    id: "223",
                    familyId: '37',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                  {
                    name: 'Attribute C of family B',
                    id: "224",
                    familyId: '37',
                    keyEnabled: true,
                    requiredEnabled: true,
                    rangeEnabled: true,
                    rangeMin: 1,
                    rangeMax: 10,
                  },
                ]
              },
            ],
          },
        ],
      },
    ],
  },

  mutations: {
    deleteSelectedFamiliesFromSection(state, sectionId) {
      state.products.reduce((reducedSuperSections, superSection) => {
        superSection.sections.reduce((reducedSections, section) => {
          if(sectionId == section.id) {
            section.families.reduce((reducedFamilies, family ) => {
              commit('deleteSelectedFamily', family.id)
            })
          }
        })
      })
      console.log("selectedFamilies now is: ", state.families.selectedFamilies)
    },

    deleteSelectedFamiliesByFamilyId(state, sectionId) {
      console.log(state.families)
      state.products.reduce((reducedSuperSections, superSection) => {
        superSection.sections.reduce((reducedSections, section) => {
          if(sectionId == section.id) {
            section.families.reduce((reducedFamilies, family ) => {
              console.log('removing family ' + family.id, {families: state.families})
              state.families.selectedFamilies = state.families.selectedFamilies.filter(familyId => {

                return  familyId != family.id
              })

              return reducedFamilies
            }, [])
          }

          return reducedSections
        }, [])

        return reducedSuperSections
      }, [])
      console.log("selectedFamilies now is: ", state.families.selectedFamilies)

    },
  },
  actions: {

  deleteSelectedValue({dispatch}, payload) {
    switch (payload.key) {
      case "selectedFamilies": 
        dispatch('deleteSelectedFamily', payload.value)
        break
      case "selectedSections": 
        dispatch('deleteSelectedSection', payload.value)
        break
      }
    }
  },

  deleteSelectedFamiliesFromSection({commit}, sectionId) {
    commit('deleteSelectedFamiliesFromSection', sectionId)
  }
})
