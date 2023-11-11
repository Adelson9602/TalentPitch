<template>
  <el-card class="box-card">
    <div class="clearfix">
      <div class="flex justify-center">
        <el-avatar
          :size="170"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        >
        </el-avatar>
      </div>
      <div class="flex flex-col gap-y-5">
        <div class="text-center flex flex-col gap-y-2">
          <h1 class="text-blue-800 font-medium text-xl">A.C Telecom</h1>
          <p>@ac-telecom</p>
          <p class="text-violet-body font-medium">Startup - tecnología</p>
          <p class="text-lime-400">
            <font-awesome-icon icon="fa-solid fa-circle" class="text-xs" />
            Empresa activa
          </p>
          <p>
            <el-icon><Location /></el-icon>
            Floridablanca - Colombia
          </p>
          <div class="d-flex">
            <el-rate v-model="rate" size="large" />
            (10 Reviews)
          </div>
          <div>
            <el-row class="d-flex justify-center">
              <el-button plain circle class="btn-icon">
                <font-awesome-icon icon="fa-brands fa-facebook" class="text-blue-800" />
              </el-button>
              <el-button plain circle class="btn-icon">
                <font-awesome-icon icon="fa-brands fa-instagram" class="text-blue-800" />
              </el-button>
              <el-button plain circle class="btn-icon">
                <font-awesome-icon icon="fa-brands fa-x-twitter" />
              </el-button>
              <el-button plain circle class="btn-icon">
                <font-awesome-icon icon="fa-brands fa-linkedin" class="text-blue-800" />
              </el-button>
            </el-row>
          </div>
          <a href="#" class="text-primary">
            <font-awesome-icon icon="fa-solid fa-link" />
            &nbsp; https://www.actelecom.net/telecom
          </a>
        </div>
        <!-- Video -->
        <video-component
          src="https://media.talentpitch.co/resumes/115881/untitled-made-with-flexclip.mp4"
        />
        <!-- Qr -->
        <div class="container-qr flex justify-center">
          <img src="/images/qr.png" alt="Qr code" class="self-center" />
        </div>
        <div class="flex flex-col gap-y-3">
          <el-button class="color-primary btn-shared">
            <font-awesome-icon icon="fa-solid fa-share" />
            &nbsp; Compartir perfil
          </el-button>
          <button class="btn-download flex">
            <div class="icon-btn color-primary">
              <font-awesome-icon icon="fa-solid fa-download" />
            </div>
            <div class="text-btn">Descargar resumen</div>
          </button>
        </div>
        <!-- Lista información vacantes, vistas, exhibiciones -->
        <list-component :items="items" />
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VideoComponent, ListComponent } from '.'

const rate = ref(4)
const items = ref([
  {
    text: 'TALENTOS',
    icon: 'fa-solid fa-users',
    value: 20
  },
  {
    text: 'VISTAS DEL PERFIL',
    icon: 'fa-regular fa-eye',
    value: 20
  },
  {
    text: 'PITCHES RECIBIDOS',
    icon: 'fa-solid fa-video',
    value: 20
  },
  {
    text: 'EXHIBICIONES',
    icon: 'fa-solid fa-person-rays',
    value: 20
  },
  {
    text: 'VACANTES',
    icon: 'fa-regular fa-address-card',
    value: 20
  },
  {
    text: 'CONTENIDOS',
    icon: 'fa-solid fa-photo-film',
    value: 20
  }
])
</script>

<style lang="scss" scoped>
.box-card {
  position: absolute;
  top: 25%;
  z-index: 1000;
}

.btn-icon {
  border: none;
  font-size: 24px;
}

.container-qr {
  width: 288px;
  height: 240px;
  border: 1px solid #f0f0f0;
  border-radius: 15px;
}

.btn-shared {
  display: block;
  color: #fff;
  height: 40px;
  width: 100%;
}

.btn-download {
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  height: 40px;
}
.text-btn {
  padding: 5px 10px;
}
.icon-btn {
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 5px 10px;
  color: #fff;
}
</style>
