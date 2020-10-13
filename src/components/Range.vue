<template>
  <div class="cell">

      <statusEnabler
        :attributeId="attributeId"
        :familyId="familyId"
        name="Range"
      /> 
      <input 
        type="number" 
        id="min" 
        name="Min"
        min="0" 
        max="100"
        :value="min"
      >
      <input 
        type="number" 
        id="max" 
        name="Max"
        min="0" 
        max="100"
        :value="max"
      >

  </div>
</template>

<script>
import StatusEnabler from './StatusEnabler'

export default {
  name: 'range',
  components: {
    StatusEnanbler
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
    attributeId: {
      type: String,
      required: true,
      default: '',
    },
    familyId: {
      type: String,
      required: true,
      default: '',
    }
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

input {
  width: 50px;
}
</style>