<template>
  <div class="login" >  
    <local @getValue='getValue'/>
  </div>
</template>
<script lang="ts">

import local from '@/components/login-regsiter/local.vue'
import { Component,  Vue , } from 'vue-property-decorator';
@Component({
  components:{
    local
  }
})
export default class Login extends Vue{
 mounted(){
  //  console.log(this.$store);
 }
 private getValue(submit: any){
   console.log('login:::',submit);
   
 }
}

</script>
<style lang="stylus" scoped>
.login
  width 100%
  height 100%
  background url('~@/assets/img/login-bg.jpg') no-repeat
  background-size 100% 100%
</style>