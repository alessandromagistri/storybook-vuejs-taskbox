<template>
      <tr> 
        <td>{{this.attribute}}</td>
        <td>{{this.value}}</td>
        <td> 
          <h4 v-if="this.keyEnabled"> Y </h4>
          <h4 v-else> N </h4>
        </td>
        <td> 
          <h4 v-if="this.required"> Y </h4>
          <h4 v-else> N </h4>
        </td>
        <range :min="0" :max="12" :enabled="true" />
      </tr>
</template>

<script>
import Range from './Range'
export default {
  components: {
    Range,
  },
  props: {
    attribute: {
      type: String,
      required: true,
      default: 'Attribute',
    },
    value: {
      type: String,
      required: true,
      default: 'Value',
    },
    keyEnabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    required: {
      type: Boolean,
      required: true,
      default: false,
    },
  }
}
</script>

<style scoped>
table, th, td{
  border: solid black 1px;
  padding: 5px;
  text-align: center;
}
</style>