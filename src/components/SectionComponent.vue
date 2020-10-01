<template>
  <div style="border: solid white 2px; width: fit-content; padding: 10px;">
    Section
    <family /> 
  </div>
</template>

<script>
import Family from './Family'
export default {
  title: "section",
  components: {
    Family,
  },
  // props: {
  //   section: {
  //     type: String,
  //     required: true,
  //     default: "MySection"
  //   },
  // },

}
</script>

<style>

</style>