import SectionComponent from './SectionComponent'
import { withKnobs } from '@storybook/addon-knobs';
import store from '../store'

export default {
  title: 'SectionComponent',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  sectionCallbackListener(evt) {
    console.log("HEYHEY")
    this.$store.commit('sectionCallbackListener', evt)
  },
  
  familyCallbackListener(evt) {
    if (!this.selectedFamilies.includes(evt.target.value)) {
      this.selectedFamilies.push(evt.target.value)
    }
    console.log(this.selectedFamilies)
  },
}

const sectionComponentTemplate = `<sectionComponent />`  
  
    // <family 
    //   v-if="selectedSections.length !== 0" 
    //   :families="availableFamilies" 
    //   :familyCallbackListener = "familyCallbackListener"
    // /> 

export const Default = () => ({
  components: { SectionComponent }, 
  store,
  template: sectionComponentTemplate,
  data: () => {
    return {
      selectedSections: [],
    }
  },
  computed:{
    availableSections() {
      const sections = this.$store.state.superSections.reduce((result, superSection) => {
        if (superSection.id == this.$store.state.currentSelectedSuperSection) {
          result = superSection.sections
        }
        return result
      }, [])
      console.log(sections)
      this.$store.commit('assignAvailableSections', sections)
      console.log("AVAILABLE SECTIONS: ", this.$store.state.availableSections)
      return sections
    },
  },
})