import RSFamily from './RSFamily'
import { withKnobs, } from '@storybook/addon-knobs';
import store from '../store/store'

export default {
  title: 'RSFamily',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const families = [
  {
    id: 2,
    name: 'Supersection A Section A Family A',
            attributes: [
              {
                id: '111',
                familyId: '2',
                name: 'Attribute A of family A',
              },
              {
                id: '112',
                familyId: '2',
                name: 'Attribute B of family A',
              },
              {
                id: '113',
                familyId: '2',
                name: 'Attribute C of family A',
              },
            ]
  },
  {
    id: 3,
    name: 'Supersection A Section A Family B',
  },
  {
    id: 4,
    name: 'Supersection A Section A Family C',
  },
]

const familyTemplate = `<RSFamily  />`

export const Default = () => ({
  components: { RSFamily }, 
  store,
  template: familyTemplate,
  data: () => {
    return {
      selectedFamilies: [],
    }
  },
})