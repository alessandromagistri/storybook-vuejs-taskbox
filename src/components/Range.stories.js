import { action } from '@storybook/addon-actions'
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
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
  enabled: false,
}

const rangeTemplate =`<range :min="min" :max="max" :enabled="enabled"/>`

export const Default = () => ({
  components: { Range }, 
  template: rangeTemplate,
  methods: actionsData,
  props: {
    min: {
      default: number('min', 1),
    },
    max: {
      default: number('max', 23),
    },
    enabled: {
      default: boolean('enabled', false),
    },
  },
})

export const Enable = () => ({
  components: { Range }, 
  template: rangeTemplate,
  methods: actionsData,
  props: {
    min: {
      default: number('min', 1),
    },
    max: {
      default: number('max', 23),
    },
    enabled: {
      default: boolean('enabled', true),
    },
  },
})
