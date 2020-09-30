<template>
  <div>
    <button class="myButton"> myButton</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonTest',
  props: {
    backgroundColor:  "yellow",
    name: "myName",
  },  
}
</script>

<style scoped>
.myButton {
  background-color: red;
  border: solid black 1px;
  padding: 5px;
}
</style>