
/** 
 * Supersections is the store which contains all the mutations and states for supersections' functions.
 * @module  
*/
export default {
  /**
  * The Supersection state
  * @name State
  * @type {object} 
  * @property {string} currentSelectedSuperSection The selected super section. 
  */
  state: () =>({
    currentSelectedSuperSection: null,
  }),
  /**
   * The Super section mutations
   * @name Mutations
   * @mutator {string} callbackListener=currentSelectedSuperSection It assigns to the current selected super section state's parameter the value selected from the user
   * @type {object} 
   */
  mutations: {
    /**         
     * 
     * @return{null}  
     */
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