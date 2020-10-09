<template>
  <div style="border: solid white 3px; width: fit-content; padding: 10px;">
    Select a superSection

    <select @change="callbackListener">
      <option 
        v-for="superSection in superSections" 
        :key='superSection.id' 
        :value="superSection.id"
      >
      {{superSection.name}}
      </option> 
    </select> 
   
    <sectionComponent 
      v-if="currentSelectedSuperSection" 
    />
    
  </div>
</template>

<script>
import SectionComponent from './SectionComponent'
import store from '../store/store'
export default {
  title: "section",
  store,
  components: {
    SectionComponent,
  },
  methods:  {
    callbackListener(evt) {
      this.$store.dispatch('initializeSelectedSections')
      this.$store.dispatch('callbackListener', evt)
    }
  },
  computed: {
    superSections() {
      return this.$store.state.products
    },
    currentSelectedSuperSection() {
      return this.$store.state.superSections.currentSelectedSuperSection
    },
  }
}
</script>

<style>

</style>