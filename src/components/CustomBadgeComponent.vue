<template>
  <div class="badge">
    <span>
      {{ label }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.badge {
  border-radius: 10px;
  background: #e3f2fd;
  display: flex;
  width: 68px;
  padding: 0px 5px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #2196f3;
}
span {
  font-size: 12px;
}
</style>
