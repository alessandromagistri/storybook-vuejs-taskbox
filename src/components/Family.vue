<template>
  <div style="border: solid white 1px; width: fit-content; padding:10px;">
    Family
    <attributes :attributes="attributes" />
  </div>
</template>

<script>
import Attributes from './Attributes'

export default {
  name: "family",
  components: {
    Attributes
  },

  data: () => {
    return {
       attributes: [
        {
          attribute: 'AttributeOne',
          value: 'ValueOne',
          keyEnabled: false,
          required: false, 
        },
        {
          attribute: 'AttributeTwo',
          value: 'ValueTwo',
          keyEnabled: true,
          required: false,
        },
        {
          attribute: 'AttributeThree',
          value: 'ValueThree',
          keyEnabled: false,
          required: true,
        },
        {
          attribute: 'AttributeFour',
          value: 'ValueFour',
          keyEnabled: true,
          required: true,
        },
      ]
    }
  },
  // props: {
  //   family: {
  //     type: String,
  //     required: true,
  //     default: "FFFamily"
  //   }
  // }

}
</script>

<style>

</style>