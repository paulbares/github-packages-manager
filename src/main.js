import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
// import { MdButton, MdField, MdDialogConfirm, MdDialogTitle } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
// Vue.use(MdButton)
// Vue.use(MdField)
// Vue.use(MdDialogConfirm)
// Vue.use(MdDialogTitle)
// Vue.use(MdDialogActions)
// Vue.use(MdDialogContent)

new Vue({
  render: h => h(App),
}).$mount('#app')
