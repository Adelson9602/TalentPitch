<template>
  <ul class="text-gray-600 font-medium">
    <li class="list-item-li flex flex-col justify-around" v-for="(i, k) in items" :key="k">
      <div class="flex items-center">
        <div class="preppend">
          <font-awesome-icon :icon="i.icon" />
        </div>
        <div class="text flex flex-grow">{{ i.text }}</div>
        <div class="append">{{ i.value }}</div>
      </div>
      <el-divider />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { PropType, defineProps } from 'vue'

interface Items {
  icon: string
  text: string
  value: string | number
}

defineProps({
  items: {
    type: Array as PropType<Items[]>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.list-item-li {
  height: 50px;
}

.preppend,
.append {
  width: 50px;
}
</style>
