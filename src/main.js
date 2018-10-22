import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
window.axios = axios;
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $ from 'jquery';
import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'china-area-data'
Vue.prototype.http=axios;
Vue.use(RegionPicker, {
    region: REGION_DATA
})

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

window.$ = $


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
