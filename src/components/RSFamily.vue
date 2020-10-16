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

export default {
  name: "RSFamily",
  components: {
    RSAttributes,
    RSSelectedValues,
  },
  computed: {
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
      }, [] )

      return families
    },

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
    
    selectedFamilies() {
      return this.$store.state.families.selectedFamilies
    },
    selectedSections() {
      return this.$store.state.sections.selectedSections
    },
  },

  methods: {
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