import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/home"
import Category from "./views/category"
import Cart from "./views/cart"
<<<<<<< HEAD
import User from "./components/user/user"
import Register from "./components/user/register"
import Agreement from "./components/user/agreement"
import Loginbtn   from "./views/loginbtn"
=======
import User from "./views/user"
import Sp from "./components/sp"
import Makeup from "./components/category/makeup"
import Skin from "./components/category/skin"
import Mask from "./components/category/mask"
import Perfime from "./components/category/perfime"
import Tools from "./components/category/tools"
import Foods from "./components/category/foods"
>>>>>>> 7f2680ea8db8080a4c7a08a0c74bf4b0998a3a0a

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 7f2680ea8db8080a4c7a08a0c74bf4b0998a3a0a
      }
  ]
})
