<template>
  <div class="input-main q-mb-lg">
    <div class="input-main__label">{{ label }}</div>
		<q-checkbox
  class="checkbox-main"
  size="md"
  :model-value="value"
  @update:model-value="updateValue"
  val="md"
  :label="label"
/>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    value: Boolean
  },
  methods: {
    updateValue(newValue) {
      this.$emit('update:value', newValue);
    }
  }
}
</script>