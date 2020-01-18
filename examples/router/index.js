import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/swatch',
    component: () => import(/* webpackChunkName: "swatch" */ '../views/swatch.vue')
  },
  {
    path: '/icon',
    component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue')
  },
  {
    path: '/button',
    component: () => import(/* webpackChunkName: "button" */ '../views/button.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
