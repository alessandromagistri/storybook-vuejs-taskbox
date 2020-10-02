import SuperSection from './SuperSection'
import SectionComponent from './SectionComponent'
import { withKnobs, array, object } from '@storybook/addon-knobs'

export default {
  title: 'SuperSection',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}


export const actionsData = {
  callbackListener (evt) {
    console.log(evt)
    this.currentSelectedSuperSection = evt.target.value
  },
  sectionCallbackListener (evt) {

  }
}

export const superSections = [
    {
      id: 1,
      name: "Supersection A",
      sections: [
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
          ],
        },
        {
          id: 3,
          name: "Supersection A Section B",
        },
      ],
    },
    {
      id: 2,
      name: "Supersection B",
      sections: [
        {
          id: 4,
          name: "Supersection B Section A",
        },
        {
          id: 5,
          name: "Supersection B Section B",
        },
      ],
    },
  ]

//export const onChangeCallback = (evt) => { alert("changed") }

const superSectionTemplate = '<div><SuperSection :superSections="superSections" :callbackListener="callbackListener" /><SectionComponent v-if="currentSelectedSuperSection" :sections="availableSections" :sectionCallbackListener="sectionCallbackListener" /> </div>'

export const Default = () => ({
  components: { SuperSection, SectionComponent },
  template: superSectionTemplate,
  data:() => {
    return {
      currentSelectedSuperSection: null,
    }
  },
  props: {
    superSections: {
      default: array('superSections', superSections),
    }
  },
  computed:{
    availableSections: function() {
      //let sections = [
      //  {
      //    id: 3,
      //    name: "oiuhdashoudsaohiusadoiu"
      //  }
      //]
      //section fa il reduce di supersections per trovare le sections figlie della superSection con ID currentSelectedSuperSecstio
      //section = reduce di supersections per trovare sections di superSection con ID = currentSelectedSuperSection
      
      const sections = superSections.reduce((result, superSection) => {
        if(superSection.id == this.currentSelectedSuperSection){
          result = superSection.sections
        }
        return result
      }, [])
      console.log(sections)
      //let mySection = superSections.reduce(myFunc)
      //myFunc= (section, currentSelectedSuperSection) => section.id === currentSelectedSuperSection.id



      return sections
    }
  },
  methods: actionsData,
})
