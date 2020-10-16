import RSResultWrapper from './RSResultWrapper'
import { withKnobs, object, array } from '@storybook/addon-knobs';

export default {
  title: 'RSResultWrapper',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}



//PRODUCTS!
//PARAMETRI DI RICERCA (ENABLER + RANGE)


const products = {

  'p001': {

    manufacturer: "RS PRO",
    description: "Set giraviti RS PRO, 6 pezzi, lama Cromata e nichelata, fosfonio manganese",
    price: "5.00€",
  },
  'p002': {

    manufacturer: "RS PRO",
    description: "Cacciavite a bussola RS PRO, Esagonale 5.5",
    price: "3.00€",
  },
  'p003': {

    manufacturer: "RS PRO",
    description: "Cacciavite a stella RS PRO, Esagonale 2.5",
    price: "7.20€",
  }
}

const searchParams = [  
  {
    attributeId: "12",
    keyEnabled: true,
    requiredEnabled: true,
    range: {

      min: 1,
      max: 10,
      enabled: true,
    }
  },
  {
    attributeId: "11",
    keyEnabled: false,
    requiredEnabled: true,
    range: {

      min: 3,
      max: 24,
      enabled: false,
    }
  },
  
]


const attributesTemplate = '<RSResultWrapper :searchParams="searchParams" :products="products" />'

export const Default = () => ({
  components: { RSResultWrapper }, 
  template: attributesTemplate,
  props: {
    searchParams: {
      default: () => array('searchParams', searchParams)
    },
    products: {
      default: () => object('products', products)
    }
  },
})