import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import Task from './Task';
export default {
  title: 'Task',
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  argTypes: {
    id: { 
      control: { 
        type: 'text' 
      } 
    },
    title: { 
      control: { 
        type: 'text' 
      } 
    },
    state: { 
      control: { 
        type: 'text' 
      } 
    },
    backgroundColor: {
      control: 'color',
    }
  },
  args: {
    id: '1',
    title: 'titolo',
    state: 'TASK_ARCHIVED',
    backgroundColor: 'yellow'
  },
};
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0),
};

const taskTemplateString = '<Task :title="title" :id="id" :state="state" />'
const taskTemplate = (args, {argTypes}) => ({
  components: { Task },
  props: Object.keys(argTypes),
  template: taskTemplateString,
})
// default task state
export const Default = (args, {argTypes}) => ({
  components: { Task }, 
  template: taskTemplateString,
  props: Object.keys(argTypes), 
  
  // {
  //   task: {
  //     default: object('task', { ...taskData }),
  //   },
  // },
  // args: {
  //   task: "",
  // },
  // argTypes: {
  //   task: { control: { type:"text" } },
  // },

  methods: actionsData,
});

// pinned task state
export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => object('task', {
        ...taskData,
        state: 'TASK_PINNED',
      }),
    },
  },
  methods: actionsData,
});
// archived task state
export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => object('task', {
        ...taskData,
        state: 'TASK_ARCHIVED',
      }),
    },
  },
  methods: actionsData,
});

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => object( 'task', {
        ...taskData,
        title: longTitle,
      }),
    },
  },
  methods: actionsData,
});