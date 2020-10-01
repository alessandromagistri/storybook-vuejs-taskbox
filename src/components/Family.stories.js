import Family from './Family'
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Family',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const actionsData = {
}

export const FamilyData =  {
  // family: 'family'
}


const familyTemplate = '<family />'

export const Default = () => ({
  components: { Family }, 
  template: familyTemplate,
  // props: {
  //   family: {
  //     default: text('family', "family"),
  //   },
  // },
  methods: actionsData,
})