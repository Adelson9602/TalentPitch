<template>
  <div class="flex items-center">
    <h5 class="title text-secondary w-3/6">{{ title }}</h5>
    <el-divider> </el-divider>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.5px;
}
</style>
