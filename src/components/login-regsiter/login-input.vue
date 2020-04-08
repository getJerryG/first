<template>
  <div class="login-input">
    <form action="" method="post">
      <div class="userName">
        <label for="userName">userName:</label>
          <input type="text" name="userName" v-model="userName">
      </div>
      <div class="password">
        <label for="password">passWord:</label>
          <input :type="getPassWordView" name="password" v-model="password">
          <div class="icon" @click="setPassWordView()">
            <i class="el-icon-view" />
            <span class="noview" v-if="passWordView">\</span>  
          </div>
      </div>
      <div class="aginpassword" v-if="getaginpassword">
        <label for="aginpassword">aginpassWord:</label>
          <input :type="getPassWordView" name="password" v-model="aginpassword">
          <div class="icon" @click="setPassWordView()">
            <i class="el-icon-view" />
            <span class="noview" v-if="passWordView">\</span>  
          </div>
      </div>
      <div class="sumbit">
        <input type="button" :value="buttonValue" @click="sumbitValue()">
      </div>
      <router-link :to="`/${link}`" class="buttontitle">Go to {{link}}</router-link>

    </form>

  </div>
</template>
<script lang='ts'>
import { Vue , Component} from 'vue-property-decorator';


@Component
export default class LoginInput extends Vue {
  private passWordView = false
  private userName = ''
  private password = ''
  private aginpassword = ''

  private setPassWordView(){
    this.passWordView = !this.passWordView     
  }
  private sumbit() {
    if(this.userName && this.password ){
      return{
        userName: this.userName,
        password: this.password,
      } 
    }else {
      return null
    }
    
  }
  private sumbitValue(){
    
    if(this.sumbit() != null){
      let sumbit = {}
      if(this.$route.name === 'register') {
        sumbit = Object.assign(this.sumbit() , {aginpassword:this.aginpassword})
        this.$emit('getValue',sumbit)
      }else {
        this.$emit('getValue',this.sumbit())
      }
    } 
  }

  private get getPassWordView(){
    return this.passWordView ? 'text' : 'password'
  }
  private get getaginpassword(){  
    return this.$route.name === 'register'
  }
  private get buttonValue(){  
    return this.$route.name 
  }
  private get link(){
    return this.$route.name === 'register'? 'login' : 'register'
  }
}
</script>
<style lang="stylus">
.login-input
  padding 50px 30px
  form
    height 100%
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    label 
      color #fff
      font-weight bold
    [type=text],[type=password]
      border-bottom 1px solid #fff
      color #fff
    .password,.aginpassword
      display flex
      position relative
      .icon
        position absolute
        right 0
        cursor pointer
        font-size 20px
        .noview,.el-icon-view
          color #fff
        .noview
          position absolute
          top -20%
          left 20%
          font-size 24px
    [type=button]
      padding 5px 20px
      background-color #2090ff
      color #fff
      border-radius 10px
      cursor pointer
    [type=button]:hover
      background-color #2020ff
      border-radius 10px
    .sumbit
      width 100%
      display flex
      justify-content center
      align-items center
    .buttontitle
      position absolute
      color #fff
      bottom 10px
    .buttontitle:hover
      text-decoration underline
      color #f40
</style>