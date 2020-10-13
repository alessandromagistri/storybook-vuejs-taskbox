<template>
<div>

</div>
      <!-- <tr> 
        <td>{{attributeName}}</td>
        <td>{{familyId}}</td>
        <td> 
          <statusEnabler
            :attributeId="attributeId"
            :familyId="familyId"
            name="Key" 
          />
        </td>
        <td>
          <statusEnabler
            :attributeId="attributeId"
            :familyId="familyId"
            name="Required"
          />
        </td>
        <td>
          <div style="dispay: flex; justify-content: space-between;">
            <range 
              :min="rangeMin"
              :max="rangeMax"
              :familyId="familyId"
              :attributeId="attributeId"
            />
          </div>
        </td>
      </tr> -->
</template>



<script>
// import Range from './Range'
// import StatusEnabler from './StatusEnabler'
export default {

  name: "RSAttribute",

  // components: {
  //   Range,
  //   StatusEnabler,
  // },

  props: {
    attributeName: {
      type: String,
      required: true,
      default: 'Attribute',
    },

    familyId: {
      type: String,
      required: true,
      default: 'familyID',
    },

    attributeId: {
      type: String,
      required: true,
      default: 'Id',
    },

    rangeMin: {
      type: Number,
      required: true,
      default: 1,
    },

    rangeMax: {
      type: Number,
      required: true,
      default: 10,
    },
  }
}

</script>

<style >
</style>