<template>
  <div :class="taskClass">
    <label class="checkbox">
      <input type="checkbox" :checked="isChecked" :disabled="true" name="checked" />
      <span class="checkbox-custom" @click="$emit('archive-task', id)" />
    </label>
    <div class="title">
      <input type="text" 
        :readonly="true" 
        :value="title" 
        placeholder="Input title" 
        style="text-overflow: ellipsis;"
      />
    </div>
    <div class="actions">
      <a @click="$emit('pin-task', id)" v-if="!isChecked">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'task',
    props: {
      id: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      }
      // task: {
      //   type: Object,
      //   required: true,
      //   default: () => ({
      //     id: '',
      //     state: '',
      //     title: '',
      //   }),
      // },
    },
    computed: {
      taskClass() {
        return `list-item ${this.state}`;
      },
      isChecked() {
        return this.state === 'TASK_ARCHIVED';
      },
    },
  };
</script>
<style scoped>
.list-item {
  background-color: greenyellow;
}
</style>