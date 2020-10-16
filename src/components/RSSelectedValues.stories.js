import RSSelectedValues from './RSSelectedValues'
import { withKnobs, array, text } from '@storybook/addon-knobs'

export default {
  title: 'RSSelectedValues',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const selectedValuesData= {
name: "NAME!",
values: ["One", "Two", "Three"],
storeKey: "storeKey"
}

const selectedValuesTemplate =
  ` <RSSelectedValues 
      :values="values" 
      :name="name"
      :storeKey="storeKey"
    />`
export const Default = () => ({
  components: { RSSelectedValues },
  template: selectedValuesTemplate,
  props: {
    values: {
      default: () => array('values', selectedValuesData.values )
    },
    name: {
      default: () => text('name', selectedValuesData.name)
    },
    storeKey: {
      default: () => text('storeKey', selectedValuesData.storeKey)
    }
  },
})
