import store from '@/store/index.ts'
import Vue from 'vue';
export function requireAuth(to: any,from: any ,next: any){
  if (to.meta.requireAuth) { // 判断跳转的路由是否需要登录
    if (store.state.userLogin.token) { // vuex.state判断token是否存在
      next() // 已登录
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else if(to.path === '/login') {
    next()
   
  }else {
    next()
  }
}
export function isloadinganimation(to: any,from: any ,next: any){
  const that = Vue 
  next()
}


 