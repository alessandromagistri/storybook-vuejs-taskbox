<template>
      <tr> 
        <td>{{this.attribute}}</td>
        <td>{{this.familyId}}</td>
        <td> 
          <!-- <statusEnabler  :enabled="this.keyEnabled" name="Key" />  -->
          {{this.id}}
        </td>
        <!-- <td>
          <statusEnabler  :enabled="this.required" name="Required" />
        </td> -->
        <td>
          <range :min="0" :max="12" :enabled="true" />
        </td>
      </tr>
</template>

<script>
import Range from './Range'
import StatusEnabler from './StatusEnabler'
export default {
  components: {
    Range,
    StatusEnabler,
  },
  props: {
    attribute: {
      type: String,
      required: true,
      default: 'Attribute',
    },
    familyId: {
      type: String,
      required: true,
      default: 'familyID',
    },
    id: {
      type: String,
      required: true,
      default: "ID"
    }
  
    // },
    // keyEnabled: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // required: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
  }
}
</script>

<style>
</style>