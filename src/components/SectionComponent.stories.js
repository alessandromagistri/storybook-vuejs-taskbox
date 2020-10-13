import SectionComponent from './SectionComponent'
import store from '../store/store'
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'SectionComponent',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}


const sectionComponentTemplate = `<sectionComponent />` 

export const Default = () => ({
  store,
  components: { SectionComponent },
  template: sectionComponentTemplate,
})