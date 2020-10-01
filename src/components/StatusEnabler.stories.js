import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs';
import StatusEnabler from './StatusEnabler'
export default {
  title: 'StatusEnabler',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  isChecked: action('isChecked')
}

export const statusEnablerData = {
  enabled: false,
  name: ''
}

const statusTemplate = '<status-enabler :name="name" :enabled="enabled" />'

export const Default = () => ({
  components: { StatusEnabler }, 
  template: statusTemplate,
  props: {
    statusEnabler: {
      default: () => object('statusEnabler', {
        statusEnablerData
      })
    },
  },
  methods: actionsData,
})

export const Enabled = () => ({
  components: { StatusEnabler },
  template: statusTemplate,
  props: {
    statusEnabler: {
      default: () => object('statusEnabler', {
        ...statusEnablerData,
        value: true,
      })
    },
  }
})