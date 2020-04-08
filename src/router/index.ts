import Vue from 'vue'
import Router from 'vue-router'
import  {requireAuth, isloadinganimation} from './config'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path:"/Order",
    name:"Order",
    redirect:"/Order/shoppingcart",
    component:() => import('@/views/Order/index.vue'),
    meta: {
      requireAuth: true
    },
    children:[
      {
        path:'/Order/shoppingCart',
        component:()=> import('@/views/Order/components/shoppingCart.vue')
      },
      {
        path:'/Order/waitpay',
        component:()=> import('@/views/Order/components/waitpay.vue')
      },
      {
        path:'/Order/delivery',
        component:()=> import('@/views/Order/components/delivery.vue')
      },
      {
        path:'/Order/receiv',
        component:()=> import('@/views/Order/components/receiv.vue')
      },
      {
        path:'/Order/evaluate',
        component:()=> import('@/views/Order/components/evaluate.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component:() => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component:() => import('@/views/register/index.vue')
  },
	{
		path: '/commodity/:id',
		name: 'CommodityId',
		component: () => import('@/views/commodity/_id.vue'),
    meta: {
      requireAuth: true
    },
    children:[
      {
        path:'/login',
        component:()=> import('@/views/login/index.vue')
      }
    ]
  },
  {
    path: '/test',
    name:'test',
    component:() => import ('@/views/test.vue') 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/404',
    name: 'notFound',
    component : () => import('@/views/notFound.vue')
  },
  {
    path: "*",
    redirect: '/404'
  }

]

const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to: any , form: any , next: any) => requireAuth(to,form,next))
router.beforeEach((to: any , form: any , next: any) => isloadinganimation(to,form,next))

export default router
