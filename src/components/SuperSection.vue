<template>
  <div style="border: solid white 3px; width: fit-content; padding: 10px;">
    SuperSection
    <sectionComponent /> 
  </div>
</template>

<script>
import SectionComponent from './SectionComponent'
export default {
  title: "section",
  components: {
    SectionComponent,
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