<template>
  <div>
    your search parameters: 
    <ul>
      <li 
        v-for="searchParam in searchParams"
        :key="searchParam.attributeId">
        key 
        <input
          type="checkbox"
          :checked="searchParam.keyEnabled"
          value="key"
        />
        required
        <input
          type="checkbox"
          :checked="searchParam.requiredEnabled"
          value="required"
        />
        range 
        <input
          type="checkbox"
          :checked="searchParam.range.enabled"
          value="range"
        />
        min: {{searchParam.range.min}} 
        max: {{searchParam.range.max}}
      </li>
    </ul>

    <ul>
      <li 
        class="productBox"
        v-for="(product, productId) in products"
        :key="productId"
        >
        <label> Manufacturer: {{products[productId].manufacturer}} </label>
        <label> Description: {{products[productId].description}} </label>
        <label> Price: {{products[productId].price}} </label>
      </li>
    </ul>

  </div>
</template>

<script>
import RSStatusEnabler from './RSStatusEnabler'
export default {

  name: 'RSResultWrapper',
  compoents: {
    RSStatusEnabler
  },
  props: {

    products: {

      type: Object,
      required: true,
      default: {},
    },
    searchParams: {
      
      type: Array,
      required: true,
      default: {}
    },
  },
}

</script>

<style scoped>
.productBox {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 5px;
}

</style>