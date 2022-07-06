import Vue from 'vue'
import VueRouter from 'vue-router'
import TestApi from '../views/TestApi.vue'

// User
import LoginView from '../views/user/Login.vue'
import RegisterView from '../views/user/Register.vue'
import HomePage from '../views/user/HomePage.vue'
import SlipPayment from '../views/user/SlipPayment.vue'
import OfficeDetail from '../views/user/OfficeDetail.vue'
import OfficesList from '../views/user/OfficesList.vue'
import PaymentMethod from '../views/user/PaymentMethod.vue'
import AboutUs from '../views/user/AboutUs.vue'
import BillsPage from '../views/user/BillsPage.vue'
import Invoice from '../views/user/Invoice.vue'

// Admin
import LoginAdmin from '../views/admin/LoginAdmin.vue'
import DataOffice from '../views/admin/DataOffices.vue'
import DataTransactions from '../views/admin/DataTransactions.vue'
import Bookings from '../views/admin/DataBookings.vue'
import DataReviews from '../views/admin/DataReviews.vue'
import Chat from '../views/admin/Chat.vue'
import DataCustomers from '../views/admin/DataCustomers.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/testapi',
    name: 'Test Api',
    component: TestApi
  },
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
    path: '/slippayment',
    name: 'Slip Payment',
    component: SlipPayment
  },
  {
    path: '/aboutus',
    name: 'About Us',
    component: AboutUs
  },
  {
    path: '/bills',
    name: 'Bills Page',
    component: BillsPage
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: Invoice
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
  // {
  //   path: '/admin/loginadmintest',
  //   name: 'Login Admin test',
  //   component: LoginAdminTest
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router