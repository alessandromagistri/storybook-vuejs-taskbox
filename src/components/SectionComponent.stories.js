import SectionComponent from './SectionComponent'
import Family from './Family'
import { withKnobs, array } from '@storybook/addon-knobs';

export default {
  title: 'SectionComponent',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  sectionCallbackListener(evt) {
    if (!this.selectedSections.includes(evt.target.value)) {
      this.selectedSections.push(evt.target.value)
    }
    console.log(this.selectedSections)
  },
  
  familyCallbackListener(evt) {
    if (!this.selectedFamilies.includes(evt.target.value)) {
      this.selectedFamilies.push(evt.target.value)
    }
    console.log(this.selectedFamilies)
  },
}

export const sections = [
  {
    id: 2,
    name: "Supersection A Section A",
    families: [
      {
        id: 2,
        name: "Supersection A Section A Family A",
      },
      {
        id: 3,
        name: "Supersection A Section A Family B",
      },
      {
        id: 4,
        name: "Supersection A Section A Family C",
      },
    ],
  },
  {
    id: 3,
    name: "Supersection A Section B",
    families: [
      {
        id: 5,
        name: "Supersection A Section B Family A",
      },
      {
        id: 6,
        name: "Supersection A Section B Family B",
      },
      {
        id: 7,
        name: "Supersection A Section B Family C",
      },
    ],
  }
]

const sectionComponentTemplate = 
  `<div> 
    <sectionComponent 
      :sections="sections" 
      :sectionCallbackListener="sectionCallbackListener" 
    /> 
    <family 
      v-if="selectedSections.length !== 0" 
      :families="availableFamilies" 
      :familyCallbackListener = "familyCallbackListener"
    /> 
  </div>`


export const Default = () => ({
  components: { SectionComponent, Family }, 
  template: sectionComponentTemplate,
  data: () => {
    return {
      selectedSections: [],
      selectedFamilies: [],
    }
  },
  props: {
    sections: {
      default: array('sections', sections),
    },
  },
  computed:{
    availableFamilies: function() {
      const families = sections.reduce((result, section) => {
        for (let index = 0; index < this.selectedSections.length; index ++) {
          if (this.selectedSections[index] == section.name) {
            result.push(section.families)
          }
        }
        return result
      }, [] )
      console.log("families: ", families.flat())
      return families.flat()
    }
  },
  methods: actionsData,
})