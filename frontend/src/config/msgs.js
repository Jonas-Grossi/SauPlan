import {createApp} from 'vue';
import Toasted from 'vue-toasted'
import App from '@/App.vue'


const  msgs = createApp(App)
msgs.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

msgs.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realidada com sucesso!' : payload.msg,
    { type: 'success', icon: 'check' }
)

msgs.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Oops.. Erro inesperado.' : payload.msg,
    { type : 'error', icon : 'times' }
)

export default msgs