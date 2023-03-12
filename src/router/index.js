import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '../firebase/index'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'init',
      redirect: '/login',
      component: () => import('../views/Signin.vue')
     },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'signin',
      component: () => import('../views/Signin.vue')
    },
    {
      path:'/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to,from,next )=> {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAutheticaded = auth.currentUser;
  if(requiresAuth && !isAutheticaded){
    next("/login");
  } else {
    next();
  }
})

export default router
