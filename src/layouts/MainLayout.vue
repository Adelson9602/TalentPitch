<template>
  <main>
    <nav-component />

    <banner-component />

    <!-- Contenido principal -->
    <div class="container mx-auto flex">
      <side-bar-component />

      <div class="main-content w-full">
        <div class="grid grid-flow-row auto-rows-max p-5 gap-y-5">
          <percent-component />
          <custom-tab />
          <div>03</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import {
  NavComponent,
  BannerComponent,
  SideBarComponent,
  PercentComponent,
  CustomTab
} from '../components/'
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
}
.main-content {
  padding-left: 332px;
}
</style>
