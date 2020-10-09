<template>
  <div style="border: solid white 2px; width: fit-content; padding: 10px;">
    Select your sections
    <select @change="sectionCallbackListener">
      <option 
        v-for="section in availableSections" 
        :key='section.id' 
        :value="section.id" 
      > 
      {{section.name}}
      </option> 
    </select> 

    <selectedValues
      v-if="selectedSections.length != 0"
      name="Sections"
      :values="selectedSections"
      storeKey="selectedSections"
    />
    
    <family 
      v-if="selectedSections.length != 0"
    /> 

  </div>
</template>

<script>
import Family from './Family'
import SelectedValues from './SelectedValues'
export default {
  title: "section",
  components: {
    Family,
    SelectedValues,
  },
  computed: { 
    availableSections() {
      const sections = this.$store.state.products.reduce((result, superSection) => {
        if (superSection.id == this.$store.state.superSections.currentSelectedSuperSection) {
          result = superSection.sections
        }

        return result
      }, [])
      this.$store.commit('assignAvailableSections', sections)

      return sections
    },
    selectedSections() {
      return this.$store.state.sections.selectedSections
    },
    // selectedSectionsNames() {
    //   this.$store.commit('selectedSectionsNames')
    // },
  },
  
  methods: {
    sectionCallbackListener(evt) {
      this.$store.dispatch('sectionCallbackListener', evt.target.value)
    },
  }
}
</script>

<style>

</style>