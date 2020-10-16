<template>
  <div style="border: solid white 1px; width: fit-content; padding:10px;">

    <select 
      @change="familyCallbackListener">
      <option disabled selected hidden > 
        Choose a family
      </option>
      <option 
        v-for="family in availableFamilies" 
        :key='family.id' 
        :value="family.id" 
      >
        {{family.name}}
      </option> 
    </select>

    <RSSelectedValues
      v-if="selectedFamilies.length != 0"
      name="Families"
      :values="selectedFamiliesNames"
      storeKey="selectedFamilies"
    />

    <div 
      class="attributesContainer"
      v-for="attributes in availableAttributes" 
      :key="attributes.id"
    >
      <h3>{{attributes.name}}</h3>
      <RSAttributes 
        :attributes="attributes" 
      />
    </div>
    
  </div>
</template>

<script>
import RSAttributes from './RSAttributes'
import RSSelectedValues from './RSSelectedValues'

/** 
 * RS Family Component shows all the available selectable families.
 * When the user selects one or more families, then there will be displayed its attributes
 * @component
 * @example
 * return (
 * <RSFamily />
 * )
*/
export default {
  name: "RSFamily",
  components: {
    RSAttributes,
    RSSelectedValues,
  },
  computed: {
    /**         
     * List of the available families in the selected sections
     * @return{array} The list of available families         
     */
    availableFamilies() {
      const families = this.$store.state.sections.availableSections.reduce((result, section) => {
        const sectionFamilies = this.selectedSections.reduce((filteredFamilies, selectedSection) => {
            if (selectedSection == section.id) {
              filteredFamilies.push(...section.families)
            }

            return filteredFamilies
        },[])

        this.$store.dispatch('assignAvailableFamilies', [...result, ...sectionFamilies])
        return [...result, ...sectionFamilies]
      }, [])

      return families
    },

    /**         
     * List of the available families' attributes
     * @return{array} The list of available attributes         
     */
    availableAttributes() {
      const attributes = this.$store.state.families.availableFamilies.reduce((result, family) => {
        this.$store.state.families.selectedFamilies.reduce((filteredSelectedFamilies, selectedFamily) => {
          if(selectedFamily == family.id) {
            result[family.id] = family.attributes
          }
        },{})

        return {...result}
      },[])
      this.$store.dispatch('assignAvailableAttributes', attributes )

      return attributes
    },

    /**         
     * Mapping of the families' id with their names
     * @return{array} The list of the families'names   
     */
    selectedFamiliesNames(){
      const familiesNames = this.$store.state.families.availableFamilies.reduce((result, family) => {
        this.$store.state.families.selectedFamilies.reduce((filteredSelectedFamilies, selectedFamily) => {
          if(selectedFamily == family.id) {
            result.push({ name: family.name, id: selectedFamily })
          }
        }, []) 

        return [...result]
      }, [])

      return familiesNames
    },
    
    /**         
     * Gives the selected families array inside families' store
     * @return{array} The list of selected families         
     */
    selectedFamilies() {
      return this.$store.state.families.selectedFamilies
    },
    /**         
     * Gives the selected sections array in order to have the available families
     * @return{array} The list of selected sections         
     */
    selectedSections() {
      return this.$store.state.sections.selectedSections
    },
  },

  methods: {
    /**         
     * Pushes in the selected families array the selected family
     * @return{null}  
     */
    familyCallbackListener(evt) {
      this.$store.dispatch('familyCallbackListener', evt.target.value)
    }
  },
}
</script>

<style scoped>
.attributesContainer {
  margin-top: 10px;
}
</style>