import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Bootstrap from 'bootstrap/dist/js/bootstrap.js'
import {createApp} from 'vue';
import App from '@/App.vue'

const  app = createApp(App)

app.use(Bootstrap)