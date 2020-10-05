import Family from './Family'
import { withKnobs, array } from '@storybook/addon-knobs';

export default {
  title: 'Family',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  familyCallbackListener(evt) {
    console.log(evt)
  }
}

export const families = [
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
]

const familyTemplate = 
  `<family 
    :families="families"  
    :familyCallbackListener="familyCallbackListener"
  />`

export const Default = () => ({
  components: { Family }, 
  template: familyTemplate,
  props: {
    families: {
      default: () => array('families', families)
    }
  },
  methods: actionsData,
})