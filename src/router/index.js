import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import ('views/home/Home.vue')
const Cart = ()=> import ('views/cart/Cart.vue')
const Category = ()=> import ('views/category/Category.vue')
const Profile = ()=> import ('views/profile/Profile.vue')
const Detail = ()=> import('views/detail/Detail.vue')



const routes = [

  {
    path: '/',
    redirect:'/home'

  },
  {path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart
  },
  {
    path: '/profile',
    name: '/profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile
  },
  {
    path: '/detail/:iid',
    name: '/detail',
    component: Detail
  }
  /*{
    path: '/profie',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile
  }*/


]

const router = new VueRouter({
  routes,
  mode: 'history',



})

export default router
