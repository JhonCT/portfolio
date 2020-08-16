import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab);

import './assets/css/sass/themes/portfolio.scss'

Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
