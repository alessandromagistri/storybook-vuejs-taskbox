import SelectorComponent from './SelectorComponent'
import { withKnobs, array } from '@storybook/addon-knobs'

export default {
  title: 'SelectorComponent',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {}

export const selectorComponentData = {
  
}

const selectorComponentTemplate = '<selectorComponent  />'

export const Default = () => ({
  components: { SelectorComponent },
  template: selectorComponentTemplate,
  methods: actionsData,
})
