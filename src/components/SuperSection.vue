<template>
  <div style="border: solid white 3px; width: fit-content; padding: 10px;">
    SuperSection
    <select @change="callbackListener">
      <option v-for="superSection in superSections" 
      :key='superSection.id' 
      :value="superSection.id" >{{superSection.name}}</option> 
    </select> 
  </div>
</template>

<script>
import SectionComponent from './SectionComponent'
export default {
  title: "section",
  components: {
    SectionComponent,
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