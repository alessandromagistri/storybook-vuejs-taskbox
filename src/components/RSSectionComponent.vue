<template>
  <div style="border: solid white 2px; width: fit-content; padding: 10px;">
    Select your sections
    <select @change="sectionCallbackListener">
      <option disabled selected hidden > 
        Choose a section
      </option>
      <option 
        v-for="section in availableSections" 
        :key='section.id' 
        :value="section.id" 
      > 
      {{section.name}}
      </option> 
    </select> 

    <RSSelectedValues
      v-if="selectedSections.length != 0"
      name="Sections"
      :values="selectedSectionsNames"
      storeKey="selectedSections"
    />
    
    <RSFamily 
      v-if="selectedSections.length != 0"
    /> 

  </div>
</template>

<script>
import RSFamily from './RSFamily'
import RSSelectedValues from './RSSelectedValues'
/** 
 * RS Section Component shows all the available selectable sections
 * The user can select one or more sections
 * @component
 * @example
 * return (
 * <RSSectionComponent />
 * )
*/
export default {
  name: "RSSectionComponent",
  components: {
    RSFamily,
    RSSelectedValues,
  },
  computed: { 
    /**         
     * List of the available sections in the selected supersections
     * @return{array} The list of available sections         
     */
    availableSections() {
      const sections = this.$store.state.products.reduce((result, superSection) => {
        if (superSection.id == this.$store.state.superSections.currentSelectedSuperSection) {
          result = superSection.sections
        }

        return result
      }, [])
      this.$store.dispatch('assignAvailableSections', sections)

      return sections
    },
    /**         
     * Gives the selected sections array inside sections' store
     * @return{array} The list of available families         
     */
    selectedSections() {
      return this.$store.state.sections.selectedSections
    },
    /**         
     * Mapping of the sections' id with their names
     * @return{array} The list of the sections' names   
     */
    selectedSectionsNames(){
      const sectionsNames = this.$store.state.sections.availableSections.reduce((result, section) => {
        this.$store.state.sections.selectedSections.reduce((filteredSelectedSections, selectedSection) => {
          if(selectedSection == section.id) {
            result.push({ name: section.name, id: selectedSection })
          }
        }, []) 

        return [...result]
      }, [])

      return sectionsNames
    },

  },
  
  methods: {
    /**         
     * Pushes in the selected sections array the selected section
     * @return{null}
     */
    sectionCallbackListener(evt) {
      this.$store.dispatch('sectionCallbackListener', evt.target.value)
    },
  }
}
</script>

<style>

</style>