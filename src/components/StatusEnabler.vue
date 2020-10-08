<template>
  <div>
    <div v-if="this.enabled"> Y </div>
    <div v-else> N </div>
  </div>
</template>

<script>
export default {
  name: 'status-enabler',
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    enabled: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>

<style>

</style>