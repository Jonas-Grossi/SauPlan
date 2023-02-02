import AuthLogin from '@/components/auth/AuthLogin'
import HomeDashboard from '@/components/home/HomeDashboard.vue'
import RectoPatient from '@/components/pages/rectosigmoidoscopy/RectoPatient.vue'
import DensitPatient from '@/components/pages/densitometry/DensitPatient.vue'
import ColonoPatient from '@/components/pages/colonoscopy/ColonoPatient.vue'
import SurgeryPatient from '@/components/pages/surgery/SurgeryPatient.vue'
import SurgerySus from '@/components/pages/surgerysus/SurgerySus.vue'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomeDashboard
        },
        {
            name: 'auth',
            path: '/auth',
            component: AuthLogin
        }, {
            name: 'rectosigmoidoscopy',
            path: '/rectosigmoidoscopy',
            component: RectoPatient

        }, {
            name: 'colonoscopy',
            path: '/colonoscopy',
            component: ColonoPatient

        }, {
            name: 'densitometry',
            path: '/densitometry',
            component: DensitPatient

        }, {
            name: 'surgery',
            path: '/surgery',
            component: SurgeryPatient

        }, {
            name: 'surgerysus',
            path: '/surgerysus',
            component: SurgerySus

        }
    ]


})
export default router