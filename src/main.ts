import './assets/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {
  faUserSecret,
  faPlus,
  faChevronDown,
  faCircle,
  faLink,
  faShare,
  faDownload,
  faUsers,
  faVideo,
  faPersonRays,
  faPhotoFilm,
  faUserPlus,
  faShareNodes
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faBell, faEye, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

library.add(
  faUserSecret,
  faPlus,
  faEnvelope,
  faBell,
  faChevronDown,
  faCircle,
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faLink,
  faDownload,
  faShare,
  faUsers,
  faVideo,
  faPersonRays,
  faPhotoFilm,
  faEye,
  faAddressCard,
  faUserPlus,
  faShareNodes
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)

app.mount('#app')
