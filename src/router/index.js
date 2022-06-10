import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/loginView.vue'
import HomePage from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import PaymentView from '../views/PaymentView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/homepage',
    name: 'Home Page',
    component: HomePage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
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