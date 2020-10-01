import Attributes from './Attributes'
import { action } from '@storybook/addon-actions'
import { withKnobs, array } from '@storybook/addon-knobs';

export default {
  title: 'Attributes',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  matchAttributes: action('matchAttributes')
}

export const attributesData =  [
    {
      attribute: 'AttributeOne',
      value: 'ValueOne',
      keyEnabled: false,
      required: false, 
    },
    {
      attribute: 'AttributeTwo',
      value: 'ValueTwo',
      keyEnabled: true,
      required: false,
    },
    {
      attribute: 'AttributeThree',
      value: 'ValueThree',
      keyEnabled: false,
      required: true,
    },
    {
      attribute: 'AttributeFour',
      value: 'ValueFour',
      keyEnabled: true,
      required: true,
    },
  ]


const attributesTemplate = '<attributes :attributes="attributes" />'

export const Default = () => ({
  components: { Attributes }, 
  template: attributesTemplate,
  props: {
    attributes: {
      default: array('attributes', attributesData),
    },
  },
  methods: actionsData,
})