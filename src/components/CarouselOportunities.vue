<template>
  <div class="block" style="height: 440px">
    <el-carousel height="auto">
      <el-carousel-item class="carousel-item">
        <div class="flex p-5">
          <div class="w-1/3 flex justify-center">
            <card-oportunities />
          </div>
          <div class="w-1/3 flex justify-center">
            <card-oportunities />
          </div>
          <div class="w-1/3 flex justify-center">
            <card-oportunities />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts" setup>
import { CardOportunities } from '.'
</script>

<style scoped>
.carousel-item {
  height: 440px;
  background-color: #fff !important;
}
</style>
