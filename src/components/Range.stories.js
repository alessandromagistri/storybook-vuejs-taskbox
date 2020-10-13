import { action } from '@storybook/addon-actions'
import { withKnobs, number, text } from '@storybook/addon-knobs';
import Range from './Range'
export default {
  title: 'Range',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  someAction: action('someAction')
}

export const rangeData = {
  min: 0,
  max: 10,
  attributeId: "AttributeId",
  familyId: "FamilyId"

}

const rangeTemplate =`
<range 
  :rangeMin="rangeMin"
  :rangeMax="rangeMax"
  :familyId="familyId"
  :attributeId="attributeId"
/>`

export const Default = () => ({
  components: { Range }, 
  template: rangeTemplate,
  methods: actionsData,
  props: {
    rangeMin: {
      default: number('rangeMin', 1),
    },
    rangeMax: {
      default: number('rangeMax', 10),
    },
    attributeId: {
      default: text('attributeId', rangeData.attributeId),
    },
    familyId: {
      default: text('familyId', rangeData.familyId),
    },
  },
})

