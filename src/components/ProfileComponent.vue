<template>
  <div class="container grid grid-rows-1 gap-2">
    <div class="grid grid-cols-1 gap-2">
      <summary-company-component />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <el-card>
        <title-component
          :font-icon="false"
          src="/icons/bullseye-pointer.png"
          alt="Icon bullseye pointer"
          title="Áreas de interés"
        />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
      <el-card>
        <title-component
          :font-icon="false"
          src="/icons/head-side-brain.png"
          alt="Icon head side brain"
          title="Vacantes sugeridas por AI"
        />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
    </div>
    <div class="grid grid-cols-1 my-10">
      <custom-separator-component title="Lo que buscamos en el talento" />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <el-card>
        <title-component icon="fa-solid fa-brain" title="Conocimientos" />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
      <el-card>
        <title-component icon="fa-solid fa-paperclip" title="Habilidades" />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <el-card>
        <title-component icon="fa-solid fa-screwdriver-wrench" title="Herramientas" />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
      <el-card>
        <title-component icon="fa-solid fa-language" title="Idiomas" />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-list-component :items="list" />
        </div>
      </el-card>
    </div>
    <div class="grid grid-cols-1 gap-2">
      <el-card>
        <title-component icon="fa-solid fa-list" title="Metodologias" />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
    </div>
    <div class="grid grid-cols-1 my-10">
      <custom-separator-component title="Lo que ofrecemos en la empresa" />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <el-card>
        <title-component
          :font-icon="false"
          src="/icons/badge-check.png"
          alt="Icon badge check"
          title="Beneficios que ofrecemos"
        />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
      <el-card>
        <title-component
          :font-icon="true"
          icon="fa-solid fa-briefcase"
          title="Vacantes sugeridas por AI"
        />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <el-card>
        <title-component
          :font-icon="true"
          icon="fa-regular fa-comments"
          title="Cultura que ofrecemos"
        />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
      <el-card>
        <title-component :font-icon="true" icon="fa-solid fa-users" title="Comunidades" />
        <div class="flex flex-wrap gap-2 mt-4">
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
          <custom-badge-component label="Prueba" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  TitleComponent,
  CustomSeparatorComponent,
  CustomBadgeComponent,
  CustomListComponent,
  SummaryCompanyComponent
} from '.'

const list = [
  {
    title: 'Ingles',
    text: 'Avanzado'
  },
  {
    title: 'Frances',
    text: 'Avanzado'
  },
  {
    title: 'Aleman',
    text: 'Avanzado'
  }
]
</script>

<style lang="scss" scoped>
.el-card {
  border-radius: 10px;
  border: 1px solid #e8eaf6;
  box-shadow: none;
}
</style>
