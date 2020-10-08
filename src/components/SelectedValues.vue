<template>
  <div>
    <div>
      selected {{name}}: 
    </div>
    <div>
      <div  
        style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 5px;"
        v-for="(value, index) in values" 
        :key="index" 
      >      
        {{value}}
        <div 
          style="background-color:red; width:fit-content; padding: 5px;"
          @click="deleteElement(value)"
        >
          X
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedValue",
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    values: {
      required: true,
      default: null
    },
    storeKey: {
      type: String,
      required: true,
      default: "",
    }
  },

  computed: {
    selectedKeys() {
      debugger
      return Object.keys(this.values)
    },
    selectedStoreEntries() {
      return this.$store.state[this.storeKey]
    },
  },

  methods: {
    deleteElement(value)  {
      this.$store.dispatch('deleteSelectedValue', {key:this.storeKey, value})
      // name=='Sections'
      // ? this.$store.commit('deleteSelectedSection', index)
      // : this.$store.commit('deleteSelectedFamily', index)    
      console.log("Values now is: ", this.values)
    },
  },

  // computed: {
  //   selectedValues() {
  //     name=='sections' ? values = this.$store.state.selectedSections : value = this.$store.state.selectedFamilies
      
  //   }

  // }
}
</script>

<style>

</style>