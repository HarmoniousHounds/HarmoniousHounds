import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

// We can either import the whole bootstrap library, or import components individually.
// Individually minimises the size of the final website, but its easier to develop with everything on.
// If I turn things off again I need to remember to 
import { BootstrapVue } from 'bootstrap-vue'
// import { NavbarPlugin } from 'bootstrap-vue'
// Vue.use(NavbarPlugin)
// import { LinkPlugin } from 'bootstrap-vue'
// Vue.use(LinkPlugin)
// import { FormInputPlugin } from 'bootstrap-vue'
// Vue.use(FormInputPlugin)
// import { TablePlugin } from 'bootstrap-vue'
// Vue.use(TablePlugin)
// import { AlertPlugin } from 'bootstrap-vue'
// Vue.use(AlertPlugin)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: {id: "G-1V6YVTY6D9"}
},
router);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
