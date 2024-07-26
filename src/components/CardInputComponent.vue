<template>
  <div class="input-main q-mb-lg">
    <div class="input-main__label">{{ label }}</div>
		<q-input
			class="input-main__input"
			:model-value="value"
			@update:model-value="updateValue"
			:placeholder="placeholder"
			:dense="dense"
		
		>
      <template v-slot:append>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 5L12.5 10L7.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </template>
    </q-input>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  props: {
    value: String
  },
  methods: {
    updateValue(newValue) {
      this.$emit('update:value', newValue);
    }
  }
}
</script>