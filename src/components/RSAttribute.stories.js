import { withKnobs, number, text } from '@storybook/addon-knobs';
import RSAttribute from './RSAttribute'
export default {
  title: 'Attribute',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const attribute = {
  name: "AttributeName",
  familyId: "FamilyId",
  id:"AttributeId",
  rangeMin: 0,
  rangeMax: 10,
}

const statusTemplate = `
    <rs-attribute 
      :attributeName="attributeName" 
      :familyId="familyId" 
      :id="attributeId"
      :rangeMin="rangeMin" 
      :rangeMax="rangeMax" 
    />`


export const Default = () => ({
  components: { RSAttribute }, 
  template: statusTemplate,
  props: {
    attributeName: {
      default: text('attributeName', attribute.name),
    },
    familyId: {
      default: text('familyId', attribute.familyId),
    },
    attributeId: {
      default: text('attributeId', attribute.id),
    },
    rangeMin: {
      default: number('rangeMin', attribute.rangeMin),
    },
    rangeMax: {
      default: number('rangeMax', attribute.rangeMax),
    },
  },
})
