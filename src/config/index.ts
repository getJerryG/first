import  './element-ui'
import '@/assets/css/style.css'
import '@/lib/map.ts'
import Vue from 'vue';
import Loading from '@/views/loading/index.vue';
import  '@/views/loading/loading'

Vue.prototype.$loading = Loading

export const BASEURL = process.env.NODE_ENV =='production'? '/api' :'https://123/com'
 
