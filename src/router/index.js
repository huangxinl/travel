import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import HomeCity from '@/pages/city/city'
import HomeDetail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'HomeCity',
      component: HomeCity
    },
    {
      path: '/detail/:id',
      name: 'HomeDetail',
      component: HomeDetail
    } 
  ],  
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
