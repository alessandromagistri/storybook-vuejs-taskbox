import SectionComponent from './SectionComponent'
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'SectionComponent',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  sectionCallbackListener(evt) {
    this.$store.commit('sectionCallbackListener', evt)
  },
  
  familyCallbackListener(evt) {
    if (!this.selectedFamilies.includes(evt.target.value)) {
      this.selectedFamilies.push(evt.target.value)
    }
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
  template: sectionComponentTemplate,
  data: () => {
    return {
      selectedSections: [],
    }
  },
  computed:{
    availableSections() {
      const sections = this.$store.state.products.reduce((result, superSection) => {
        if (superSection.id == this.$store.state.currentSelectedSuperSection) {
          result = superSection.sections
        }
        return result
      }, [])
      this.$store.commit('assignAvailableSections', sections)
      return sections
    },
  },
})