<template>
  <div class="local">
    <login-input @getValue='getValue'/>
     
    
  </div>
</template>
<script lang='ts'>
  import {Vue ,Component }  from 'vue-property-decorator';
  import loginInput from './login-input.vue'
  @Component({
    components:{
      loginInput
    }
  })
  export default class Local extends Vue {
    constructor(){
      super()
    }
  getValue(submit: any){
    if(submit){
      this.$emit('getValue' , submit)
    }
 }
}
</script>
<style lang="stylus" scoped>

.local
  position absolute
  width 100% 
  height 100%
  border-radius 50%

  .login-input
    border-radius 10px
    position absolute
    width w = 400px
    height h = 300px
    top 50%
    left 50%
    margin-top -(h/2) 
    margin-left -(w/2)
    background-color rgba(255,255,255,0.2)
</style>