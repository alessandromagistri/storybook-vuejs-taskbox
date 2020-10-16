<template>
  <div>
    <table> 
      <tr class="headers">
        <th>Attribute</th>
        <th>FamilyId</th>
        <th>Key</th>
        <th>Required</th>
        <th>Range (Min - Max)</th>
      </tr>
      <RSAttribute 
        :attribute="attribute"
        v-for="attribute in attributes" 
        :key="attribute.id"
      />
    </table>
  </div>
</template>


<script>
import RSAttribute from './RSAttribute'
/** 
 * RS Attributes shows all the available attributes from the selected families.
 * @component
 * @example
 * return (
 * <RSAttributes />
 * )
*/
export default {
  name:'RSAttributes',
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

.headers {
  font-size: 20px;
}

</style>