import store from '../store/store'
import { withKnobs, text } from '@storybook/addon-knobs';
import RSStatusEnabler from './RSStatusEnabler'
export default {
  title: 'RSStatusEnabler',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const statusEnablerData = {
  enabled: false,
  name: ''
}

const statusTemplate = '<RSStatusEnabler :name="name" :familyId="familyId" :attributeId="attributeId" />'

export const Default = () => ({
  store,
  components: { RSStatusEnabler }, 
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
