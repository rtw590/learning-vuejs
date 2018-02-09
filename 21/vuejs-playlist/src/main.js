import Vue from 'vue'
import App from './App.vue'


// Import in Ninjas.vue
// import Ninjas from './Ninjas.vue'

// Global Component uses that import of ninjas.vue
// Vue.component('ninjas', Ninjas)

new Vue({
  el: '#app',
  render: h => h(App)
})
