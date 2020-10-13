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

export const attributes =  [
    {
      attribute: 'AttributeOne',
      familyId: '1',
      keyEnabled: false,
      requiredEnabled: false, 
      rangeEnabled: false, 
      rangeMin: 1,
      rangeMax: 10,
    },
    {
      attribute: 'AttributeTwo',
      familyId: '2',
      keyEnabled: true,
      requiredEnabled: false,
      rangeEnabled: true, 
      rangeMin: 4,
      rangeMax: 11,
    },
    {
      attribute: 'AttributeThree',
      familyId: '3',
      keyEnabled: false,
      requiredEnabled: true,
      rangeEnabled: false, 
      rangeMin: 2,
      rangeMax: 21,
    },
    {
      attribute: 'AttributeFour',
      familyId: '4',
      keyEnabled: true,
      requiredEnabled: true,
      rangeEnabled: false, 
      rangeMin: 3,
      rangeMax: 10,
    },
  ]

const attributesTemplate = '<attributes :attributes="attributes" />'

export const Default = () => ({
  components: { Attributes }, 
  template: attributesTemplate,
  props: {
    attributes: {
      default: array('attributes', attributes),
    },
  },
  methods: actionsData,
})