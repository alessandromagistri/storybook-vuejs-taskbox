import SelectedValues from './SelectedValues'
import { withKnobs, array, text } from '@storybook/addon-knobs'

export default {
  title: 'SelectedValues',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {}
export const name = "NAME!"
export  const values = ["One", "Two", "Three"]

const selectedValuesTemplate =
  ` <selectedValues 
      :values="values" 
      :name="'name'" 
    />`
export const Default = () => ({
  components: { SelectedValues },
  template: selectedValuesTemplate,
  props: {
    // values: {
    //   default: () => array('values', values )
    // },
    name: {
      default: () => text('name', name)
    }
  },
})
