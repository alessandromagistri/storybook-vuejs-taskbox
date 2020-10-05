<template>
  <div style="border: solid white 2px; width: fit-content; padding: 10px;">
    Select your sections
    <select @change="sectionCallbackListener">
      <option v-for="section in sections" 
      :key='section.id' 
      :value="section.name" >{{section.name}}</option> 
    </select> 

    <family 
      v-if="selectedSections.length != 0"
      :families="availableFamilies"
    /> 
  </div>
</template>

<script>
import Family from './Family'

export default {
  title: "section",
  components: {
    Family
  },
  data: () => {
    return {
      selectedSections: [],
    }
  },
  props: {
    sections: {
      type: Array,
      required: true,
      default: [],
    },
    sectionCallbackListener: {
      required: true,
      type: Function,
    },
  },
  computed:{ 
    availableFamilies: function() {
      const families = sections.reduce((result, section) => {
        if(this.selectedSections == section.name) {
          result.push(section.families)
        }
        return result
      }, [] )
      console.log({families})
      console.log("CONCATED: ",[].concat.apply([], families))
       return [].concat.apply([], families)
    },
  },

}
</script>

<style>

</style>