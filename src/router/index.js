import Vue from 'vue'
import VueRouter from 'vue-router'

// User
import LoginView from '../views/user/Login.vue'
import RegisterView from '../views/user/Register.vue'
import HomePage from '../views/user/HomePage.vue'
import OfficeDetail from '../views/user/OfficeDetail.vue'
import OfficesList from '../views/user/OfficesList.vue'
import PaymentMethod from '../views/user/PaymentMethod.vue'
import AboutUs from '../views/user/AboutUs.vue'

// Admin
import LoginAdmin from '../views/admin/LoginAdmin.vue'
import DataOffice from '../views/admin/DataOffices.vue'
import DataTransactions from '../views/admin/DataTransactions.vue'
import Bookings from '../views/admin/Bookings.vue'
import DataReviews from '../views/admin/DataReviews.vue'
import Chat from '../views/admin/Chat.vue'
import DataCustomers from '../views/admin/DataCustomers.vue'
import LoginAdminTest from '../views/admin/LoginAdminTest.vue'



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
    path: '/officedetail/:id',
    name: 'Office Detail',
    component: OfficeDetail
  },
  {
    path: '/offices',
    name: 'Offices List',
    component: OfficesList
  },
  {
    path: '/payment',
    name: 'Payment Method',
    component: PaymentMethod
  },
  {
    path: '/aboutus',
    name: 'About Us',
    component: AboutUs
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
  },
  {
    path: '/admin/loginadmintest',
    name: 'Login Admin test',
    component: LoginAdminTest
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router