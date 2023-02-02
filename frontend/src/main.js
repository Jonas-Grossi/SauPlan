import 'font-awesome/css/font-awesome.css'
import VueGravatar from "vue3-gravatar";
//import msgs from './config/msgs'
import bootstrap from '@/config/bootstrap'
import './config/axios'
import store from './config/store'
import router from './config/router'
import App from './App.vue'
import { createApp, h } from 'vue'




const app = createApp({
   
    router,
    bootstrap,

  //  msgs,
    
    render: () => h(App)
})
app.use(router)
app.use(store)
app.use(VueGravatar);
app.mount('#app')