<template>
  <div style="border: solid white 1px; width: fit-content; padding:10px;">
    I'M IN FAMILY
    <select @change="familyCallbackListener">
      <option v-for="family in families" 
      :key='family.id' 
      :value="family.name" >{{family.name}}</option> 
    </select> 
    <!-- Family: {{family.name}} -->
    <!-- <attributes :attributes="family.attributes" /> -->
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
    families: {
      type: Array,
      required: true,
      default: {},
    },
    familyCallbackListener: {
      required: true,
      type: Function,
    },
  },
}
</script>

<style>

</style>