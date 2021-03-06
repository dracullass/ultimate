import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Thing from './views/Things.vue'
import BFOnePage from './views/BFOnePage.vue'


import Test from './views/teste.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/things',
      name: 'things',
      component: Thing
    },
    {
      path: '/battlefield_one',
      name: 'battlefield_one',
      component: BFOnePage
    },{
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
