<template>
  <div>
    <table> 
      <tr>
        <th>Attribute</th>
        <th>FamilyId</th>
        <th>Key</th>
        <th>Required</th>
        <th>Range (Min - Max)</th>
      </tr>
      <rs-attribute />
    <!-- <RSAttribute 
        :attributeName="attribute.name"
        :familyId="attribute.familyId"
        :attributeId="attribute.id"
        :rangeMin="attribute.rangeMin"
        :rangeMax="attribute.rangeMax"
        v-for="attribute in attributes" 
        :key="attribute.id"
        /> -->
    </table>
  </div>
</template>

<script>
import RSAttribute from './RSAttribute'
export default {
  name:'Attributes',
  components: {
    RSAttribute,
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