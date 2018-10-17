import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/home"
import Category from "./views/category"
import Cart from "./views/cart"
import User from "./components/user/user"
import Register from "./components/user/register"
import Agreement from "./components/user/agreement"
import Loginbtn   from "./views/loginbtn"

Vue.use(Router)

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
          path:'/user/register',
          component:Register
      },
      {
          path:'/user/agreement',
          component:Agreement
      },
      {
        path:'/user/loginbtn',
        component:Loginbtn
      }
  ]
})
