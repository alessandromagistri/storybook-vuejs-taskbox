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
      return Object.keys(this.values)
    },
    selectedStoreEntries() {
      return this.$store.state[this.storeKey]
    },
  },

  methods: {
    deleteElement(value)  {
      this.$store.dispatch('deleteSelectedValue', {key:this.storeKey, value})
      // console.log("Values now is: ", this.values)
    },
  },
}
</script>

<style>

</style>