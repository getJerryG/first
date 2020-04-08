<template>
  <div class="personal">
    <div class="first">
      <div class="box">
        <div>
        <img :src="src" alt="tx" ></div>
        <div>
          <router-link to="/login">Hi~欢迎逛鞋店</router-link>
          <div>
            <router-link v-if="getLogin" to>{{getUserName}}</router-link>
            <router-link to="/login" v-if="!getLogin" class='login'>登录</router-link>
            <span v-if="!getLogin">|</span>
            <router-link to="/register" v-if="!getLogin" class='register'>注册</router-link>
          </div>
        </div>
        <div class="btn">
          <router-link to>优惠券</router-link>
          <router-link to="/Order">订单</router-link>
        </div>
        </div>
    </div>
    <div class="last">
     <list/> 
      <list/> 
    </div>  
   
  </div>
</template>
<script lang='ts'>
import list from './list.vue'
import { Vue , Component } from 'vue-property-decorator';
@Component({
  components:{
    list
  }
})
export default class Personal extends Vue{
    
  private src =require('@/assets/img/tx.jpg');
  private newslist=[
    {
      url:"https://baidu.com",
      type:'',
      title:"抗衰老？防感冒？一道汤就可以解决了"
    },
    {
      url:"https://baidu.com",
      type:"热点",
      title:"抗衰老？防感冒？一道汤就可以解决了"
    },
    {
      url:"https://baidu.com",
      type:'',
      title:"抗衰老？防感冒？一道汤就可以解决了"
    },
    {
      url:"https://baidu.com",
      type:"热点",
      title:"抗衰老？防感冒？一道汤就可以解决了"
    }
  ]
  private aaalist=[
    {
      url:"https://baidu.com",
      type:'',
      title:"抗衰老？防感冒？一道汤就可以解决了"
    },
    {
      url:"https://baidu.com",
      type:"热点",
      title:"抗衰老？防感冒？一道汤就可以解决了"
    },
    {
      url:"https://baidu.com",
      type:'',
      title:"抗衰老？防感冒？一道汤就可以解决了"
    },
    {
      url:"https://baidu.com",
      type:"热点",
      title:"抗衰老？防感冒？一道汤就可以解决了"
    }
  ]
  private  get getLogin() {
    const token = this.$store.state.userLogin.token
    return  token
  }
  private  get getUserName(){
    return this.getLogin ? this.$store.state.userLogin.userName : ' '
  }
}
      
  

</script>
<style lang="stylus">
.personal
  padding 30px 20px
  background-color #fff
  display flex
  flex-direction column
  justify-content space-around
  .first
    .box
      display flex
      flex-direction column
      justify-content center
      margin-bottom 10px
      img 
        width 45px
        height 45px
        border-radius 50%
      div
        text-align center
        a
          font-size 12px
      
        .login
          color #f90
        .register
          color #f90
        :hover
          color #f40
      .btn
        margin-top 10px
        display flex
        justify-content space-between
        margin-bottom 10px
        
        button
          font-size 14px
        :hover
          text-decoration underline
          
</style>