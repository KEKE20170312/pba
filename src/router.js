import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home"
import Category from "./views/category"
import Cart from "./views/cart"
import Register from "./components/user/register"
import Agreement from "./components/user/agreement"
import Loginbtn   from "./components/user/loginbtn"
import User from "./views/user"
import Sp from "./components/sp"
import Makeup from "./components/category/makeup"
import Find from "./components/category/find"
import Goods from  "./components/user/goods"
import Center from "./components/user/center"
import Binding from "./components/user/binding"
import  New from  "./components/user/new"
import  Editor from "./components/user/editor"
import Opinion  from  "./components/user/opinion"
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/Home',
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
          component:User,
      },
      {
          path: '/user/loginbtn',
          component: Loginbtn
      },
      {
          path:'/user/opinion',
          component:Opinion
      },
      {
          path: '/sp/:id',
          component: Sp
      },
      {
          path: '/category/:type',
          component:Makeup
      },
      {
          path: '/user/goods',
          component: Goods,
      },
      {
          path:'/user/goods/new',
          component:New

      },
      {
          path:'/user/goods/editor',
          component:Editor
      },
      {
          path:'/user/center',
          component:Center
      },
      {
        path:'/user/binding',
        component:Binding
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
          path:'/category/makeup',
          component:Makeup
      },
      {
          path:'/category/find/:type',
          component:Find
      }
  ]
})
