import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
