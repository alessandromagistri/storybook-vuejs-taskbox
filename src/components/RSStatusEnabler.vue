<template>
  <div>
    <input
      @click="handleAttributes"
      type="checkbox"
      :checked="enabled"
      :value="name"
    />
  </div>
</template>

<script>
export default {
  name: 'RSStatusEnabler',
  props: {
    name: {
      type: String,
      required: true,
      default: 'name of the status enabler',
    },
    enabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    familyId: {
      type: String,
      default: 'familyID',
    },
    attributeId: {
      type: String,
      default: 'id',
    },
  },

  methods: {
    handleAttributes(evt) {
      this.$store.dispatch('changeValueOfSelectedEnabler', {
        name: evt.target.value,
        attributeId: this.attributeId,
        familyId: this.familyId,
      })
    },
  },
}
</script>

<style></style>
