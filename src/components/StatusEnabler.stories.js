import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
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
    enabled: {
      default: () => boolean('enabled', false)
    },
    name: {
      default: () => text('name', "name")
    },
  },
  methods: actionsData,
})

export const Enabled = () => ({
  components: { StatusEnabler },
  template: statusTemplate,
  props: {
    enabled: {
      default: () => boolean('enabled', true)
    },
    name: {
      default: () => text('name', "enabled")
    },
  },
})