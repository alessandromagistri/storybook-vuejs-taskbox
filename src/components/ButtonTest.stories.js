import ButtonTest from './ButtonTest.vue'

export default {
  title: 'ButtonTest',
  component: ButtonTest,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    name: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    backgroundColor: 'red',
    name: 'myNameInStories'
  }
}



export const buttonData = {
  backgroundColor: 'yellow',
  name: 'ThisIsMyName',
}

const buttontTestTemplate = '<button-test />'

export const Primary = (args, {argTypes}) => ({         
  components: {ButtonTest},           
  template: buttontTestTemplate,
  props: Object.keys(argTypes),         
  // props: {                            
  //   button: {
  //     default: () => buttonData,
  //   },
  // },
})

export const Secondary = () => ({
  components: {ButtonTest},
  template: buttontTestTemplate,
})

// const Red = Template.bind({})
// Red.args = {
//    backgroundColor: '#e00',
// }

// export default {
//   title: 'Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// }