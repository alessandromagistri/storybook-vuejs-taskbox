import store from '../store/store'
import { withKnobs, text } from '@storybook/addon-knobs';
import StatusEnabler from './StatusEnabler'
export default {
  title: 'StatusEnabler',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const statusEnablerData = {
  enabled: false,
  name: ''
}

const statusTemplate = '<status-enabler :name="name" :familyId="familyId" :attributeId="attributeId" />'

export const Default = () => ({
  store,
  components: { StatusEnabler }, 
  template: statusTemplate,
  props: {
    name: {
      default: () => text('name', "name")
    },
    familyId: {
      default: () => text('familyId', "familyId")
    },
    attributeId: {
      default: () => text('attributeId', "attributeId")
    },
  },
})
