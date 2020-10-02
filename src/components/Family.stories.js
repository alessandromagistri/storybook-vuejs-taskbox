import Family from './Family'
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'Family',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
}

export const familyData =  {
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
  name: 'FamilyName',
  products: 'Those are your products',
}


const familyTemplate = '<family :family="family" />'
// const familyTemplate = '<family :name="name" :products="products" />'


export const Default = () => ({
  components: { Family }, 
  template: familyTemplate,
  props: {
    family: {
      default: () => object('family', {...familyData})
    }
    // attributes: {
    //   default: () => array('attributes',  [...familyData.attributes] )
    //   ,
    // },
    // name: {
    //   default: text('name', familyData.name),
    // },
    // products: {
    //   default: text('products', familyData.products),
    // },
  },
  methods: actionsData,
})