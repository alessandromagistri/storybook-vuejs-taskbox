<template>
  <div>
    <h4 v-if="this.enabled"> Y </h4>
    <h4 v-else> N </h4>
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