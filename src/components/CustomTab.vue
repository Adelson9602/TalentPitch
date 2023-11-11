<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Perfil" name="profile">Perfil</el-tab-pane>
    <el-tab-pane label="Vacantes" name="oportunities">
      <h1 class="text-secondary">Publicadas recientemente</h1>
      <carousel-oportunities />

      <h1 class="text-secondary">Publicadas recientemente</h1>
      <carousel-oportunities />
    </el-tab-pane>
    <el-tab-pane label="Listas" name="lists">Listas</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { CarouselOportunities } from '.'

const activeName = ref('profile')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang="scss">
@import '../assets/main.scss';

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs__item.is-active {
  color: $color-primary;
}

.el-tabs__active-bar {
  background-color: $color-primary;
}

.el-tabs__item.is-top {
  color: #9fa8da;
  font-size: 16px;
}

.el-tabs__item.is-top,
.el-tabs__active-bar.is-top {
  width: 100px;
}
</style>
