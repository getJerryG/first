<template>
  <div class="register" >
    <local @getValue="getValue"/>
    <button @click="aaa">点我</button>
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
export default class Register extends Vue{
 private getValue(sumbit: any){
   console.log('register:::',sumbit);
 }
 private aaa(){
  console.log(this.$store.state.loading.loading);
  // this.$store.commit('setIsloading',{loading:true})
 }
}

</script>
<style lang="stylus" scoped>
.register
  width 100%
  height 100%
  background url('~@/assets/img/login-bg.jpg') no-repeat
  background-size 100% 100%
</style>