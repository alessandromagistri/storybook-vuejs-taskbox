<template>
  <div class="cell">
    <td> <statusEnabler  :enabled="this.enabled" name="Enabled" /> </td>
    <td> {{this.min}} </td>
    <td> {{this.max}} </td>
  </div>
</template>

<script>
import StatusEnabler from './StatusEnabler'

export default {
  name: 'Range',
  components: {
    StatusEnabler,
  },
  data: () => {
    return {
      active: false,
    }
  },
  props: {
    min: {
      type: Number,
      required: true,
      default: 0,
    },
    max: {
      type: Number,
      required: true,
      default: 0,
    },
    enabled: {
      type: Boolean,
      required: true,
      default: false,
    },
  }

}
</script>

<style scoped>
td {
  border: none;
  text-align: center;
}

.cell {
  display: flex;
  justify-content: space-around;
}
</style>