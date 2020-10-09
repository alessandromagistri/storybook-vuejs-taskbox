import SuperSection from './SuperSection'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'SuperSection',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  familyCallbackListener(evt) {
    if (!this.selectedFamilies.includes(evt.target.value)) {
      this.selectedFamilies.push(evt.target.value)
    }
    console.log("Selected families: ", this.selectedFamilies)
  },
}

export const superSections = [
  {
    id: '1',
    name: 'Supersection A',
    sections: [
      {
        id: '2',
        name: 'Supersection A Section A',
        families: [
          {
            id: '2',
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
            id: '3',
            name: 'Supersection A Section A Family B',
            attributes: [
              {
                id: '222',
                familyId: '3',
                name: 'Attribute A of family B',
              },
              {
                id: '223',
                familyId: '3',
                name: 'Attribute B of family B',
              },
              {
                id: '224',
                familyId: '3',
                name: 'Attribute C of family B',
              },
            ]
          },
        ],
      },
      {
        id: '3',
        name: 'Supersection A Section B',
        families: [
          {
            id: '6',
            name: 'Supersection A Section B Family A',
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
            id: '7',
            name: 'Supersection A Section B Family B',
            attributes: [
              {
                id: '222',
                familyId: '3',
                name: 'Attribute A of family B',
              },
              {
                id: '223',
                familyId: '3',
                name: 'Attribute B of family B',
              },
              {
                id: '224',
                familyId: '3',
                name: 'Attribute C of family B',
              },
            ]
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Supersection B',
    sections: [
      {
        id: '4',
        name: 'Supersection B Section A',
        families: [
          {
            id: '9',
            name: 'Supersection B Section A Family A',
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
            id: '12',
            name: 'Supersection B Section A Family B',
            attributes: [
              {
                id: '222',
                familyId: '3',
                name: 'Attribute A of family B',
              },
              {
                id: '223',
                familyId: '3',
                name: 'Attribute B of family B',
              },
              {
                id: '224',
                familyId: '3',
                name: 'Attribute C of family B',
              },
            ]
          },
        ],
      },
      {
        id: '5',
        name: 'Supersection B Section B',
        families: [
          {
            id: '23',
            name: 'Supersection B Section B Family A',
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
            id: '37',
            name: 'Supersection B Section B Family B',
            attributes: [
              {
                id: '222',
                familyId: '3',
                name: 'Attribute A of family B',
              },
              {
                id: '223',
                familyId: '3',
                name: 'Attribute B of family B',
              },
              {
                id: '224',
                familyId: '3',
                name: 'Attribute C of family B',
              },
            ]
          },
        ],
      },
    ],
  },
]

const superSectionTemplate = "<superSection />"

export const Default = () => ({
  components: { SuperSection },
  template: superSectionTemplate,
  computed: {
    superSections() {
      return this.$store.state.superSections
    },
    currentSelectedSuperSection() {
      return this.$store.state.currentSelectedSuperSection
    },
  },
  methods:  {
    callbackListener(evt) {
      this.$store.dispatch('callbackListener', evt)
    }
  },
})
