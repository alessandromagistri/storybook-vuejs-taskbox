<template>
  <div style="border: solid white 1px; width: fit-content; padding:10px;">

    <select 
      @change="familyCallbackListener">
      <option 
        v-for="family in availableFamilies" 
        :key='family.id' 
        :value="family.name" 
      >
        {{family.name}}
      </option> 
    </select>

    <selectedValues
      v-if="selectedFamilies.length != 0"
      name="Families"
      :values="selectedFamilies"
      storeKey="selectedFamilies"
    />

    <div 
      v-for="family in availableFamilies" 
      :key="family.id"
    >
      <h3>{{family.name}}</h3>
      <attributes 
        :attributes="family.attributes" 
      />
    </div>
  </div>
</template>

<script>
import Attributes from './Attributes'
import actionsData from './Family.stories'
import SelectedValues from './SelectedValues'

export default {
  name: "family",
  components: {
    Attributes,
    SelectedValues,
  },
  computed: {
    availableFamilies() {
      const families = this.$store.state.availableSections.reduce((result, section) => {
        const sectionFamilies = this.selectedSections.reduce((filteredFamilies, selectedSection) => {
            if (selectedSection == section.name) {
              filteredFamilies.push(...section.families)
            }

            return filteredFamilies
        },[])

        return [...result, ...sectionFamilies]
      }, [] )
      console.log("families: ", families)

      return families
    },
    selectedFamilies() {
      return this.$store.state.selectedFamilies
    },
    selectedSections() {
      return this.$store.state.selectedSections
    },
  },

  methods: {
    familyCallbackListener(evt) {
      this.$store.commit('familyCallbackListener', evt.target.value)
    }
  },
}
</script>

<style>

</style>