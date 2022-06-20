import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

import HomePage from '../views/user/HomePage.vue'
import BookingDetail from '../views/user/BookingDetail.vue'
import DataOffice from '../views/admin/DataOffices.vue'
import DataTransactions from '../views/admin/DataTransactions.vue'

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

  // Admin
  {
    path: '/admin/dataoffices',
    name: 'Data Offices',
    component: DataOffice
  },
  {
    path: '/admin/datatransactions',
    name: 'Data Transactions',
    component: DataTransactions
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
