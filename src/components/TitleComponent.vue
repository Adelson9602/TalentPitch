<template>
  <div class="flex items-center">
    <el-avatar class="avatar" v-if="icon || src">
      <font-awesome-icon :icon="icon" class="text-blue-800" v-if="fontIcon" />
      <img :src="src" :alt="alt" v-else />
    </el-avatar>
    &nbsp;
    <h5 class="text-title text-secondary">{{ title }}</h5>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: String
  },
  src: {
    type: String
  },
  alt: {
    type: String
  },
  fontIcon: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.el-avatar {
  background: #f6f6f6;
}

img {
  height: 50%;
  width: auto;
}
</style>
