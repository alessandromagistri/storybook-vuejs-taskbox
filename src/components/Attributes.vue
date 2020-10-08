<template>
  <div>
    <table> 
      <tr>
        <th>Attribute</th>
        <th>FamilyId</th>
        <th>Id</th>
        <th colspan="3">Range (Min - Max)</th>
      </tr>
    <attribute 
        :attribute="attribute.name"
        :familyId="attribute.familyId"
        :id="attribute.id"
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
      default: () => [],
    }
  }

}
</script>

<style>
th, td{
  border: solid black 1px;
  padding: 5px;
  text-align: center;
}

</style>