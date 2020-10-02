<template>
  <div>
    <div class='dropdown'>
      SuperSection
      <div class="dropdownContent">
        <input type="radio" id="superSection1" name="superSection1" value="superSection1">
       <label for="superSection1">SuperSection1</label> 
        <input type="radio" id="superSection2" name="superSection2" value="superSection2">
       <label for="superSection2">SuperSection2</label> 
        <input type="radio" id="superSection3" name="superSection3" value="superSection3">
       <label for="superSection3">SuperSection3</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.dropdown {
  border: solid black 2px;
  width: fit-content;
  padding: 5px;
}

.dropdownContent {
  display: none;
  position:absolute;
  border: solid black 1px;
  background-color: yellow;
}

.dropdown:hover .dropdownContent {
  display: block;
}

</style>