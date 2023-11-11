<template>
  <nav class="relative bg-indigo-700 text-white">
    <div class="container mx-auto flex">
      <div class="flex flex-grow">TalentPitch</div>
      <div class="flex flex-grow justify-between">
        <div class="flex flex-grow justify-self-center">
          <a href="#" class="px-3">Conéctate</a>
          <a href="#" class="px-3">Mi muros</a>
          <a href="#" class="px-3">Mis listas</a>
          <a href="#" class="px-3">Aprendes</a>
        </div>
        <div>
          <el-row>
            <el-button class="btn-start">
              Comenzar &nbsp; <font-awesome-icon icon="fa-solid fa-plus" />
            </el-button>
            <el-button class="btn-icon" circle plain>
              <font-awesome-icon icon="fa-regular fa-envelope" />
            </el-button>
            <el-button class="btn-icon" circle plain>
              <font-awesome-icon icon="fa-regular fa-bell" />
            </el-button>
            <el-button class="btn-avatar">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
              </el-avatar>
              &nbsp;
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-icon" />
            </el-button>
          </el-row>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '../assets/main.scss';
.btn-start {
  background-color: $color-primary !important;
  border: none !important;
  color: #fff !important;
  padding: 5px 15px;
}

.btn-icon,
.btn-avatar {
  border: none !important;
  color: #fff !important;
  background-color: transparent !important;
  font-size: 24px;
}

.down-icon {
  // margin-left: 10px;
  font-size: 16px;
}
</style>
