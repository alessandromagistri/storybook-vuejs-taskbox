import SuperSection from './SuperSection'
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'SuperSection',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
}

export const superSectionData =  {
  superSection: 'superSection'
}


const superSectionTemplate = '<superSection />'

export const Default = () => ({
  components: { SuperSection }, 
  template: superSectionTemplate,
  // props: {
  //   section: {
  //     default: text('section', "section"),
  //   },
  // },
  methods: actionsData,
})