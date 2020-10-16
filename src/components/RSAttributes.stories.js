import RSAttributes from './RSAttributes'
import { action } from '@storybook/addon-actions'
import { withKnobs, array } from '@storybook/addon-knobs';

export default {
  title: 'RSAttributes',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  matchAttributes: action('matchAttributes')
}

export const attributes =  [
    {
      name: 'AttributeOne',
      familyId: '1',
      keyEnabled: false,
      requiredEnabled: false, 
      rangeEnabled: false, 
      rangeMin: 1,
      rangeMax: 10,
    },
    {
      name: 'AttributeTwo',
      familyId: '2',
      keyEnabled: true,
      requiredEnabled: false,
      rangeEnabled: true, 
      rangeMin: 4,
      rangeMax: 11,
    },
    {
      name: 'AttributeThree',
      familyId: '3',
      keyEnabled: false,
      requiredEnabled: true,
      rangeEnabled: false, 
      rangeMin: 2,
      rangeMax: 21,
    },
    {
      name: 'AttributeFour',
      familyId: '4',
      keyEnabled: true,
      requiredEnabled: true,
      rangeEnabled: false, 
      rangeMin: 3,
      rangeMax: 10,
    },
  ]

const attributesTemplate = '<RSAttributes :attributes="attributes" />'

export const Default = () => ({
  components: { RSAttributes }, 
  template: attributesTemplate,
  props: {
    attributes: {
      default: array('attributes', attributes),
    },
  },
  methods: actionsData,
})