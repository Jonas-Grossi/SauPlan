import { createStore } from "vuex"


export default new createStore({
    state: {
        isMenuVisible: true,
        user:{
            name:'ADM',
            email:'mock@cod3r.com.br'
        }
    },
    mutations: {
        toggleMenu(state, isVisible) {
            
            if (isVisible === undefined) {
                
                state.isMenuVisible = !state.isMenuVisible

            } else {
               state.isMenuVisible = isVisible
             
            }
            
        }
        
    }

})


