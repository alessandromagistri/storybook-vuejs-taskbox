import SuperSection from './SuperSection'
import SectionComponent from './SectionComponent'
// import Family from './Family'
import { withKnobs, array } from '@storybook/addon-knobs'

export default {
  title: 'SuperSection',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  callbackListener(evt) {
    this.currentSelectedSuperSection = evt.target.value
    this.selectedSections = []
  },
  sectionCallbackListener(evt) {
    if (!this.selectedSections.includes(evt.target.value))
      this.selectedSections.push(evt.target.value)
    console.log(this.selectedSections)
  },
  // familyCallbackListener(evt) {
  //   if (!this.selectedFamilies.includes(evt.target.value)) {
  //     this.selectedFamilies.push(evt.target.value)
  //   }
  //   console.log(this.selectedFamilies)
  // },
}

export const superSections = [
  {
    id: 1,
    name: 'Supersection A',
    sections: [
      {
        id: 2,
        name: 'Supersection A Section A',
        families: [
          {
            id: 2,
            name: 'Supersection A Section A Family A',
          },
          {
            id: 3,
            name: 'Supersection A Section A Family B',
          },
        ],
      },
      {
        id: 3,
        name: 'Supersection A Section B',
      },
    ],
  },
  {
    id: 2,
    name: 'Supersection B',
    sections: [
      {
        id: 4,
        name: 'Supersection B Section A',
      },
      {
        id: 5,
        name: 'Supersection B Section B',
      },
    ],
  },
]

const superSectionTemplate =
  `<div> 
    <SuperSection 
      :superSections="superSections" 
      :callbackListener="callbackListener" 
    /> 
    <SectionComponent 
      v-if="currentSelectedSuperSection" 
      :sections="availableSections" 
      :sectionCallbackListener="sectionCallbackListener" 
    />
  </div>`

export const Default = () => ({
  // components: { SuperSection, SectionComponent, Family },
  components: { SuperSection, SectionComponent },

  template: superSectionTemplate,
  data: () => {
    return {
      currentSelectedSuperSection: null,
      selectedSections: [],
    }
  },
  props: {
    superSections: {
      default: array('superSections', superSections),
    },
  },
  computed: {
    availableSections: function() {
      const sections = superSections.reduce((result, superSection) => {
        if (superSection.id == this.currentSelectedSuperSection) {
          result = superSection.sections
        }
        return result
      }, [])
      console.log(sections)
      return sections
    },
    // availableFamilies: function() {
    //   const families = this.availableSections.reduce((result, section) => {
    //     for (let index = 0; index < this.selectedSections.length; index ++) {
    //       if (this.selectedSections[index] == section.name) {
    //         result.push(section.families)
    //       }
    //     }
    //     return result
    //   }, [] )
    //   console.log("families: ", families.flat())
    //   return families.flat()
    // }
  },
  methods: actionsData,
})
