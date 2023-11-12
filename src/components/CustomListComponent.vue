<template>
  <ul v-for="(i, k) in items" :key="k" :class="direction == 'horizontal' ? 'inline-flex' : 'block'">
    <li>
      <p class="title">
        {{ i.title }}
      </p>
      <p class="subtitle">
        {{ i.text }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'

interface Items {
  title: String
  text: string
}

type Direction = 'vertical' | 'horizontal'

defineProps({
  items: {
    type: Array as PropType<Items[]>,
    required: true
  },
  direction: {
    type: String as PropType<Direction>,
    default: 'horizontal'
  }
})
</script>

<style lang="scss" scoped>
li {
  padding: 0 10px;
}

.title {
  color: #212121;

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 19.5px */
  letter-spacing: 0.5px;
}

.subtitle {
  color: #a1a1a1;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: 0.5px;
}
</style>
