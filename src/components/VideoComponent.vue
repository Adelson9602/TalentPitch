<template>
  <div class="container-video rounded-lg border-solid border">
    <video ref="videPlayer" :src="src"></video>
    <div class="buttom-play flex justify-center">
      <el-button
        type="danger"
        class="self-center btn-play"
        :class="isPlaying ? 'hidden' : 'block'"
        @click="playVideo"
        :icon="isPlaying ? VideoPause : VideoPlay"
        circle
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { VideoPlay, VideoPause } from '@element-plus/icons-vue'

defineProps({
  src: {
    type: String,
    required: true
  }
})

const videPlayer = ref()
const isPlaying = ref(false)

const playVideo = () => {
  if (videPlayer.value) {
    if (isPlaying.value) {
      videPlayer.value.pause()
      isPlaying.value = false
    } else {
      videPlayer.value.play()
      isPlaying.value = true
    }
  }
}
</script>

<style lang="scss" scoped>
video {
  width: 288px;
  height: 306px;
  border-radius: 15px;
}

.container-video {
  position: relative;
}

.buttom-play {
  position: absolute;
  transform: translateY(-306px);
  width: 100%;
  height: 100%;
}

.buttom-play:hover .btn-play {
  display: block !important;
}

.hidden {
  display: none !important;
}
.block {
  display: block !important;
}
</style>
