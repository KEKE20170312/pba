import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/home"
import Category from "./views/category"
import Cart from "./views/cart"
import User from "./views/user"
import Sp from "./components/sp"
import Makeup from "./components/category/makeup"
import Find from "./components/category/find"

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/home',
          alias:'/',
          component:Home
      },
      {
          path:'/category',
          component:Category
      },
      {
          path:'/cart',
          component:Cart
      },
      {
          path:'/user',
          component:User
      },
      {
          path: '/sp',
          component: Sp
      },
      {
          path:'/category/:type',
          component:Makeup
      },
      {
          path:'/category/find/:type',
          component:Find
      }
  ]
})
