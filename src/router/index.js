import Vue from 'vue'
import VueRouter from 'vue-router'

// User
import LoginView from '../views/user/Login.vue'
import RegisterView from '../views/user/Register.vue'
import HomePage from '../views/user/HomePage.vue'
import BookingDetail from '../views/user/BookingDetail.vue'
import BookingView from '../views/user/Booking.vue'
import AboutUsView from '../views/user/AboutUs.vue'

// Admin
import LoginAdmin from '../views/admin/LoginAdmin.vue'
import DataOffice from '../views/admin/DataOffices.vue'
import DataTransactions from '../views/admin/DataTransactions.vue'
import Bookings from '../views/admin/Bookings.vue'
import DataReviews from '../views/admin/DataReviews.vue'
import Chat from '../views/admin/Chat.vue'
import DataCustomers from '../views/admin/DataCustomers.vue'


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
  {
    path: '/booking',
    name: 'booking',
    component: BookingView
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUsView
  },

  // Admin
  {
    path: '/admin',
    name: 'Login Admin',
    component: LoginAdmin
  },
  {
    path: '/admin/dataoffices',
    name: 'Data Offices',
    component: DataOffice
  },
  {
    path: '/admin/bookings',
    name: 'Bookings',
    component: Bookings
  },
  {
    path: '/admin/datareviews',
    name: 'Data Reviews',
    component: DataReviews
  },
  {
    path: '/admin/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/admin/datacustomers',
    name: 'Data Customers',
    component: DataCustomers
  },
  {
    path: '/admin/datatransactions',
    name: 'Data Transactions',
    component: DataTransactions
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router