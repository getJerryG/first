<template>
  <div class="top-logo">
    <router-link to="/" class="logo">爱鞋子Love shoes</router-link>
    <top-bar/>
    <ul>
      <li>
        <router-link to="/Order">我的订单</router-link>
      </li>
      <li>
        <router-link to>帮助中心</router-link>
      </li>
      <li>
        <router-link to>公告</router-link>
      </li>
      <li>
        <router-link to='/login' v-if="!islogin">登录</router-link>
        <router-link to='/a' v-else @mouseover.native="getIsMsg()" @mouseout.native="setIsMsg()" >个人中心</router-link>/
        <router-link to='/register'>注册</router-link>
        <is-msg v-if="isMsg" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import topBar from "./top-bar.vue"
import isMsg from './is-msg.vue';
import { Component,  Vue } from 'vue-property-decorator';

 @Component({
   components:{
     topBar,
     isMsg
   }
 })
 export default class TopLogo extends Vue {
  private isMsg = false
  private get islogin(){
    
    return this.$store.state.userLogin.token
  }
  private getIsMsg(){
    this.isMsg = true  
  }
 

 }
</script>
<style lang="stylus">
.top-logo
  height 60px
  color: #3f3f3f
  display flex
  align-items center
  ul 
    width 300px
    flex 4
    display flex
    justify-content space-evenly
    li 
      cursor pointer
      color #a3
      a
        color #a3
      :hover 
        color #f40
 .logo 
  font-size 1.4em
  flex 2
  font-weight bold
 .top-bar
  flex 4
</style>  
