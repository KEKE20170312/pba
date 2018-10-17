import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/home"
import Category from "./views/category"
import Cart from "./views/cart"
import Register from "./components/user/register"
import Agreement from "./components/user/agreement"
import Loginbtn   from "./components/user/loginbtn"
import User from "./views/user"
import Sp from "./components/sp"
import Makeup from "./components/category/makeup"
import Skin from "./components/category/skin"
import Mask from "./components/category/mask"
import Perfime from "./components/category/perfime"
import Tools from "./components/category/tools"
import Foods from "./components/category/foods"
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
          path: '/sp',
          component: Sp
      },
      {
          path:'/category/makeup',
          component:Makeup
      },
      {
          path:'/category/skin',
          component:Skin
      },
      {
          path:'/category/mask',
          component:Mask
      },
      {
          path:'/category/perfime',
          component:Perfime
      },
      {
          path:'/category/tools',
          component:Tools
      },
      {
          path:'/category/foods',
          component:Foods
      }
  ]
})
