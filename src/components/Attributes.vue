<template>
  <div>
    <table> 
      <tr>
        <th>Attribute</th>
        <th>Value</th>
        <th>Key</th>
        <th>Required</th>
        <th colspan="3">Range (Min - Max)</th>
      </tr>
    <attribute 
        :attribute="attribute.attribute"
        :value="attribute.value"
        :keyEnabled="attribute.keyEnabled"
        :required="attribute.required"
        v-for="(attribute, index) in attributes" 
        :key='index' 
        />
    </table>
  </div>
</template>

<script>
import Attribute from './Attribute'
export default {
  components: {
    Attribute,
  },
  props: {
    attributes: {
      type: Array,
      required: true,
      default: [],
    }
  }

}
</script>

<style>

</style>