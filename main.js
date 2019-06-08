import Vue from 'vue'
import App from './App'
import pin from './pin.js'

Vue.config.productionTip = false
// Vue.prototype.$theme.primaryColor="#f37b1d"

App.mpType = 'app'

Vue.prototype.$pin = pin

const app = new Vue({
    ...App
})
app.$mount()
