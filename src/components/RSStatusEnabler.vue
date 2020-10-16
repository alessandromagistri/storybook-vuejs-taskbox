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
/** 
 * RS Status Enabler allows to check or uncheck the values of one attribute in order to let those values to be or not to be searched.
 * @component
 * @example
 * return (
 * <RSStatusEnabler />
 * )
*/
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
    /**         
     * Updates the value of the selected enabler (key, required or range) of the attribute.
     * @return{null}
     */
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
