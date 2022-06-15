import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import RegisterView from '../views/Register.vue'
import BookingDetail from '../views/BookingDetail.vue'

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
    path: '/bookingdetail',
    name: 'Booking Detail',
    component: BookingDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
