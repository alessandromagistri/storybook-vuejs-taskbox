<template>
  <div>
    <input @click="handleAttributes" type='checkbox' :checked="enabled" :value="name" >
  </div>
</template>

<script>
export default {
  name: 'StatusEnabler',

  data: () => {
    return {
      enabled: false,
    }
  },

  props: {
    name: {
      type: String,
      required: true,
      default:"name of the status enabler"
    },

    familyId: {
      type: String,
      required: true,
      default: 'familyID',
    },

    attributeId: {
      type: String,
      required: true,
      default: 'id',
    },
  },

  methods: {
    handleAttributes(evt) {
      this.$store.dispatch('changeValueOfSelectedEnabler', {name: evt.target.value, attributeId: this.attributeId, familyId: this.familyId})    
    },
  },
}
</script>

<style>

</style>