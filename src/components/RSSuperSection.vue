<template>
  <div style="border: solid white 3px; width: fit-content; padding: 10px;">
    Select a superSection

    <select @change="callbackListener">
      <option disabled selected hidden > 
        Choose a super section
      </option>
      <option 
        v-for="superSection in superSections" 
        :key='superSection.id' 
        :value="superSection.id"
      >
      {{superSection.name}}
      </option> 
    </select> 
   
    <RSSectionComponent 
      v-if="currentSelectedSuperSection" 
    />
    
  </div>
</template>

<script>
import RSSectionComponent from './RSSectionComponent'
import store from '../store/store'
/** 
 * RS Super Section shows all the available super sections
 * @component
 * @example
 * return (
 * <RSSuperSection />
 * )
*/
export default {
  name: "RSSuperSection",
  store,
  components: {
    RSSectionComponent,
  },
  methods:  {
    /**         
     * It updates the value of the selected super section.
     * It also initializes the selected section array, because whenever i select a new super section, the sections will change.
     * @return{null}      
     */
    callbackListener(evt) {
      this.$store.dispatch('initializeSelectedSections')
      this.$store.dispatch('callbackListener', evt)
    }
  },
  computed: {
    /**         
     * List of the available super sections
     * @return{array} The list of available super sections         
     */
    superSections() {
      return this.$store.state.products
    },
    /**         
     * The selected super section
     * @return{text} The  selected super section
     */
    currentSelectedSuperSection() {
      return this.$store.state.superSections.currentSelectedSuperSection
    },
  }
}
</script>

<style>

</style>