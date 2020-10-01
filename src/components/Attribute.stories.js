import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Attribute from './Attribute'
export default {
  title: 'Attribute',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  isChecked: action('isChecked')
}

export const AttributeData = {
  attribute: 'Attribute',
  value: 'Value',
  keyEnabled: false,
  required: false,
}

const statusTemplate = '<attribute :attribute="attribute" :value="value" :keyEnabled="keyEnabled" :required="required" />'

export const Default = () => ({
  components: { Attribute }, 
  template: statusTemplate,
  props: {
    attribute: {
      default: text('attribute', "Attribute"),
    },
    value: {
      default: text('value', "Value"),
    },
    keyEnabled: {
      default: boolean('keyEnabled', false),
    },
    required: {
      default: boolean('required', true),
    },
  },
  methods: actionsData,
})
