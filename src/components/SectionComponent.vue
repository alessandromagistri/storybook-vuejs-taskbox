<template>
  <div style="border: solid white 2px; width: fit-content; padding: 10px;">
    Select your sections
    <select @change="sectionCallbackListener">
      <option 
        v-for="section in availableSections" 
        :key='section.id' 
        :value="section.name" 
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
      const sections = this.$store.state.superSections.reduce((result, superSection) => {
        if (superSection.id == this.$store.state.currentSelectedSuperSection) {
          result = superSection.sections
        }

        return result
      }, [])
      console.log(sections)
      this.$store.commit('assignAvailableSections', sections)
      return sections
    },

    selectedSections() {
      return this.$store.state.selectedSections
    },
  },
  
  methods: {
    sectionCallbackListener(evt) {
      this.$store.commit('sectionCallbackListener', evt.target.value)
    },
  }

}
</script>

<style>

</style>