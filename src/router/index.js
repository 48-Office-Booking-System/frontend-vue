import Vue from 'vue'
import VueRouter from 'vue-router'
import PaymentView from '../views/PaymentView.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/paymentpage',
    name: 'payment',
    component: PaymentView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router