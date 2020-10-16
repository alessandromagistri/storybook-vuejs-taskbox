import RSSectionComponent from './RSSectionComponent'
import store from '../store/store'
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'RSSectionComponent',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}


const sectionComponentTemplate = `<RSSectionComponent />` 

export const Default = () => ({
  store,
  components: { RSSectionComponent },
  template: sectionComponentTemplate,
})