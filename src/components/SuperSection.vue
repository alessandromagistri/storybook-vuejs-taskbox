<template>
  <div style="border: solid white 3px; width: fit-content; padding: 10px;">
    Select a superSection

    <select @change="callbackListener">
      <option v-for="superSection in superSections" 
      :key='superSection.id' 
      :value="superSection.id" >{{superSection.name}}</option> 
    </select> 

    <sectionComponent 
      v-if="currentSelectedSuperSection" 
      :sections="availableSections" 
      :sectionCallbackListener="sectionCallbackListener" 
    />
    
  </div>
</template>

<script>
import SectionComponent from './SectionComponent'
export default {
  title: "section",
  components: {
    SectionComponent,
  },
  data: () => {
    return {
      currentSelectedSuperSection: null,
    }
  },
  methods:  {
    debug (evt)  {
      console.log(evt)
    },
  },
  props: {
    superSections: {
      type: Array,
      required: true,
      default: []
    },
    callbackListener: {
      required: true,
      type: Function,
    },
  },
}
</script>

<style>

</style>