import axios from 'axios'
import Vue from 'vue';
import store from '@/store';
import defauktsAxios from './defaults'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  store.commit('setIsloading',true)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(res => { 
  if (res.status === 200) {
    
    return Promise.resolve(res)
    } else {
    return Promise.reject(res)
    }
  }, error => {
    return Promise.reject(error)
})

export default axios