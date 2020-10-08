import Family from './Family'
import { withKnobs, } from '@storybook/addon-knobs';

export default {
  title: 'Family',
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

const familyTemplate = `<family  />`

export const Default = () => ({
  components: { Family }, 
  template: familyTemplate,
  data: () => {
    return {
      selectedFamilies: [],
    }
  },
})