import SectionComponent from './SectionComponent'
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'SectionComponent',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
}

export const sectionComponentData =  {
  section: 'sectionComponent'
}


const sectionComponentTemplate = '<sectionComponent />'

export const Default = () => ({
  components: { SectionComponent }, 
  template: sectionComponentTemplate,
  // props: {
  //   section: {
  //     default: text('section', "section"),
  //   },
  // },
  methods: actionsData,
})