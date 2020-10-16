<template>
  <div>
    <div>
      selected {{name}}: 
    </div>
    <div>
      <div  
        class="selectedValueBox"
        v-for="(value, index) in values" 
        :key="index" 
      >      
        {{value.name}}
        <div 
          class="deleteBox"
          @click="deleteElement(value.id)"
        >
          X
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** 
 * RS Selected Values shows all the selected values, that may be families or sections.
 * It also allows to delete those selected values
 * @component
 * @example
 * return (
 * <RSSelectedValues />
 * )
*/
export default {
  name: "RSSelectedValues",
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

  // computed: {
  //   selectedKeys() {
  //     return Object.keys(this.values)
  //   },
  //   selectedStoreEntries() {
  //     return this.$store.state[this.storeKey]
  //   },
  // },

  methods: {
    /**         
     * Deletes from the given storeKey's store (which can be the "family" or "section") the selected value.
     * @return{null}
     */
    deleteElement(value)  {
      this.$store.dispatch('deleteSelectedValue', {key:this.storeKey, value})
    },
  },
}
</script>

<style>
.deleteBox {
  background-color:rgb(233, 11, 11); 
  width: fit-content;
  padding: 4px;
  padding-top: 3px;
  padding-bottom: 1px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
}
.deleteBox:hover {
  cursor:pointer
}

.selectedValueBox {
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  margin-top: 5px;
  border-radius: 10px;
  padding-left: 20px;
}
.selectedValueBox:hover {
  opacity: 0.9;
  border: solid black 1px;
}

</style>