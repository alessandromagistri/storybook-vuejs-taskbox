<template>
  <div style="border: solid white 3px; width: fit-content; padding: 10px;">
    Select a superSection

    <select @change="callbackListener">
      <option disabled selected hidden > 
        Choose a super section
      </option>
      <option 
        v-for="superSection in superSections" 
        :key='superSection.id' 
        :value="superSection.id"
      >
      {{superSection.name}}
      </option> 
    </select> 
   
    <RSSectionComponent 
      v-if="currentSelectedSuperSection" 
    />
    
  </div>
</template>

<script>
import RSSectionComponent from './RSSectionComponent'
import store from '../store/store'
export default {
  name: "RSSuperSection",
  store,
  components: {
    RSSectionComponent,
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