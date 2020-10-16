<template>
      <tr> 
        <td>{{attribute.name}}</td>
        <td>{{attribute.familyId}}</td>
        <td> 
          <RSStatusEnabler
            :attributeId="attribute.id"
            :familyId="attribute.familyId"
            :enabled="attribute.keyEnabled"
            name="Key" 
          />
        </td>
        <td>
          <RSStatusEnabler
            :attributeId="attribute.id"
            :familyId="attribute.familyId"
            :enabled="attribute.requiredEnabled"
            name="Required"
          />
        </td>
        <td>
          <div style="dispay: flex; justify-content: space-between;">
            <RSRangeComponent 
              :rangeMin="attribute.rangeMin"
              :rangeMax="attribute.rangeMax"
              :enabled="attribute.rangeEnabled"
              :familyId="attribute.familyId"
              :attributeId="attribute.id"
            />
          </div>
        </td>
      </tr>
</template>



<script>
import RSRangeComponent from './RSRangeComponent'
import RSStatusEnabler from './RSStatusEnabler'
export default {

  name: "RSAttribute",

  components: {
    RSRangeComponent,
    RSStatusEnabler,
  },

  props: {
    attribute: {
      type: Object,
      required: true,
      default: {},
    }
  }
}

</script>

<style >
</style>