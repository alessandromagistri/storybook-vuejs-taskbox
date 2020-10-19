// export default {
//   state: () =>({
//     availableAttributes: [
//       {
//         name: "Attribute A",
//         familyId: 3,
//         keyEnabled: true,
//         requiredEnabled: true,
//         rangeEnabled: true,
//         rangeMin: 1,
//         rangeMax: 10,
//       },
//     ]

//   }),

//   mutations: {
//     changeKeyEnabled(state) {
//       state.keyEnabled = !state.keyEnabled
//     },
//     changeRangeEnabled(state) {
//       state.rangeEnabled = !state.rangeEnabled

//     },
//     changeRequiredEnabled(state) {
//       state.requiredEnabled = !state.requiredEnabled
//     },
//   },

//   actions: {
//     changeValueOfSelectedEnabler({commit}, name) {
//       switch(name) {
//         case "keyEnabled": 
//           commit('changeKeyEnabled') 
//           break
//         case "rangeEnabled": 
//           commit('changeRangeEnabled') 
//             break
//         case "RangeEnabled": 
//           commit('changeRangeEnabled') 
//             break
//       }
//     }
//   }
// }
