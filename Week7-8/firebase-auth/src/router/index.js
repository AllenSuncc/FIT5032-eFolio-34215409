import { createRouter, createWebHistory } from 'vue-router'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import HomePage from '../views/HomePage.vue'
import AdminPage from '../views/AdminPage.vue'
import UserPage from '../views/UserPage.vue'
import AddBookView from '../views/AddBookView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'Register',
    component: FirebaseRegisterView
  },
  {
    path: '/signin',
    name: 'Signin',
    component: FirebaseSigninView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage
  },
  {
    path: '/user',
    name: 'User',
    component: UserPage
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
