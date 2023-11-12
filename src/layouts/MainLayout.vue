<template>
  <main>
    <nav-component />

    <banner-component />

    <!-- Contenido principal -->
    <div class="container mx-auto flex">
      <!-- SideBar -->
      <side-bar-component />

      <div class="main-content w-full">
        <div class="grid grid-flow-row auto-rows-max p-5 gap-y-5">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { NavComponent, BannerComponent, SideBarComponent } from '../components/'
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
}
.main-content {
  padding-left: 332px;
}
</style>
