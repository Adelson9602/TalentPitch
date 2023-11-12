<template>
  <el-card>
    <div class="grid grid-cols-1 gap-2">
      <title-component icon="fa-regular fa-user" :font-icon="true" title="Resumen de la empresa" />
      <div>
        <p class="text-subtitle text-black">Decripción</p>
        <p class="text-body">
          En ac telecom somos expertos en telecomunicaciones con mas de 25 años comprobables en el
          mercado, brindando empleo a mas de 321 empleados al rededor de todo el mundo
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div>
        <p class="text-subtitle text-black">Correo electrónico</p>
        <p class="text-body">ejemplo@ejemplo.com</p>
      </div>
      <div>
        <p class="text-subtitle text-black">Número de contracto</p>
        <p class="text-body">3005895648</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div>
        <p class="text-subtitle text-black">Estados deseados buscados</p>
        <p class="text-body">Emprendedor, practicas, primer empleo</p>
      </div>
      <div>
        <p class="text-subtitle text-black">Rol más buscado</p>
        <p class="text-body">Lider UX</p>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup></script>

<style></style>
