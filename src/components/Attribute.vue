<template>
      <tr> 
        <td>{{this.attribute}}</td>
        <td>{{this.value}}</td>
        <td> 
          <statusEnabler  :enabled="this.keyEnabled" name="Key" /> 
        </td>
        <td>
          <statusEnabler  :enabled="this.required" name="Required" />
        </td>
        <range :min="0" :max="12" :enabled="true" />
      </tr>
</template>

<script>
import Range from './Range'
import StatusEnabler from './StatusEnabler'
export default {
  components: {
    Range,
    StatusEnabler,
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