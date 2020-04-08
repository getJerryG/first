<template>
  <div class="msg">
    <i class="el-icon-loading"/>
    {{msg}}
  </div>
</template>
<script lang="ts">
  import { Vue , Component } from 'vue-property-decorator';
  @Component
  export default class Msg extends Vue{
    private msg ='loading...'
  }
</script>
<style lang="stylus" scoped>
  .msg
    position absolute
    border-radius 10px
    width w = 200px
    height h = 150px
    background-color rgba(255,255,255,0.8)
    margin-left -(w/2)px
    margin-top -(h/2)px
    top 50%
    left  50%
    display flex 
    justify-content center
    align-items center
    font-size 26px
    color rgba(195,105,105,0.8)
</style>