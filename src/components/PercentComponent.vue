<template>
  <div class="flex">
    <div class="w-2/3 self-center">
      <div class="flex">
        <div class="text-violet-body font-medium">
          <span>Match con la cultura</span>
          &nbsp;
          <span> {{ percent }}% </span>
        </div>
        <div class="self-center ml-2">
          <div class="w-96">
            <el-progress :percentage="percent" :stroke-width="15" color="#67C23A">
              {{ '' }}
            </el-progress>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/3">
      <el-button class="color-primary btn-pitch">Enviar Pitch</el-button>
      <el-button class="btn-follow">
        <font-awesome-icon icon="fa-solid fa-user-plus" />
        &nbsp; Seguir
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const percent = ref(50)
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
.btn-pitch {
  color: #fff !important;
  border: none !important;
}

.btn-follow {
  border: 1px solid $color-primary;
  color: $color-primary !important;
}

.btn-pitch,
.btn-follow {
  padding: 5px 15px;
}
</style>
