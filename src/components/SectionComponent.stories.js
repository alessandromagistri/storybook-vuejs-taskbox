import SectionComponent from './SectionComponent'
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'SectionComponent',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
}

export const sectionComponentData =  {
  family1: {
    attributes: [
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
    ],
    name: "family1",
    product: "Array of products"
  }, 
  family2: {
    attributes: [
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
    ],
    name: "family2",
    product: "Array of products"
  },
}

const sectionComponentTemplate = '<sectionComponent :section="section" />'

export const Default = () => ({
  components: { SectionComponent }, 
  template: sectionComponentTemplate,
  props: {
    section: {
      default: object('section', {...sectionComponentData}),
    },
  },
  methods: actionsData,
})