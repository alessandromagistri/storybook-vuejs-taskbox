<template>
  <div style="border: solid white 1px; width: fit-content; padding:10px;">
    Family: {{family.name}}
    <attributes :attributes="family.attributes" />

    {{family.products}}
  </div>
</template>

<script>
import Attributes from './Attributes'

export default {
  name: "family",
  components: {
    Attributes
  },

  props: {  
    family: {
      type: Object,
      required: true,
      default: {},
    },
  },
}
</script>

<style>

</style>