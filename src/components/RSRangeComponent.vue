<template>
  <div class="cell">
      <div style="margin:auto;">
        <RSStatusEnabler
          :attributeId="attributeId"
          :familyId="familyId"
          :enabled="enabled"
          name="Range"
        /> 
      </div>
      <input 
        class="rangeInput"
        type="number" 
        id="min" 
        name="Min"
        min=0
        max=100
        :value="rangeMin"
      >
      <input 
        class="rangeInput"
        type="number" 
        id="max" 
        name="Max"
        min=0 
        max=100
        :value="rangeMax"
      >
  </div>
</template>

<script>
import RSStatusEnabler from './RSStatusEnabler'

export default {
  name: 'RSRangeComponent',
  components: {
    RSStatusEnabler
  },
  props: {
    rangeMin: {
      type: Number,
      required: true,
      default: 0,
    },
    rangeMax: {
      type: Number,
      required: true,
      default: 0,
    },
    attributeId: {
      type: String,
      required: true,
      default: '',
    },
    familyId: {
      type: String,
      required: true,
      default: '',
    },
    enabled: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  methods: {
    handleRangeValues() {
      if (!this.rangeMin > this.rangeMax) {
        this.$store.dispatch('changeValuesOfRange', {familyId: this.familyId, attributeId: this.attributeId, rangeMin: this.rangeMin, rangeMax: this.rangeMax}) 
      } else {
        alert ("Minimum range is bigger than maximum range")
      }
    }
  }
}
</script>

<style scoped>
td {
  border: none;
  text-align: center;
}

.cell {
  display: flex;
  justify-content: space-around;
}

.rangeInput {
  width: 40px;
  padding: 1px;
  margin-left: 10px;
  background-color: inherit;
  border: none;
  border-bottom: solid black 1px;
  font-size: 13px;
}
</style>