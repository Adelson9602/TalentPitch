<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="image"
    />
    <div style="padding: 14px">
      <div class="flex justify-between">
        <p>Experticia</p>
        <el-rate v-model="rate" size="small" />
        <el-button circle class="btn-icon">
          <font-awesome-icon icon="fa-solid fa-share-nodes" />
        </el-button>
      </div>
      <div class="text-left flex flex-col gap-y-3">
        <p class="title">Lider UX/UI</p>
        <p class="subtitle">Creada por organización: Nombre</p>
        <p class="paragraph">
          ¿Como podrias crear un plan de ejecución a seis meses desde tu area de conocimineto para
          generar valor en la organización?
        </p>
        <div class="flex justify-between">
          <div class="flex flex-col items-center">
            <el-badge :value="60" class="badge" type="primary"> </el-badge>
            <p>Vistas</p>
          </div>
          <div class="flex flex-col items-center">
            <el-badge :value="30" class="badge" type="primary"> </el-badge>
            <p>Comentarios</p>
          </div>
          <div class="flex flex-col items-center">
            <el-badge :value="41" class="badge" type="primary"> </el-badge>
            <p>Pitches</p>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="pt-3">
          <el-button class="btn-apply"> Aplicar a la vacante </el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const rate = ref(4)
</script>
<style lang="scss" scoped>
@import '../assets/main.scss';
.image {
  height: 73px;
  width: 100%;
  object-fit: cover;
}

.box-card {
  width: 236px;
  border-radius: 16px;
  font-size: 14px;
  border: 1px solid #989b9e !important;
}

.title {
  font-size: 16px;
  color: $color-secondary;
}

.subtitle {
  background-color: #e3f2fd;
  height: 18px;
  padding: 0px, 5px, 0px, 5px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #2196f3;
}

.paragraph {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #666666;
}

.btn-icon {
  border: none !important;
  color: $color-primary !important;
}

.btn-apply {
  background-color: $color-primary;
  padding: 5px 10px;
  color: #fff;
}

.el-divider.el-divider--horizontal {
  border-width: 0.5px !important;
}
</style>
