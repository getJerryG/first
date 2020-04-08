<template>
  <div class="com-content">
    <router-link to="">商品详情</router-link>
    <router-link to="">评论</router-link>
    <router-view></router-view>
  </div>

</template>
<script lang="ts">
  import {Vue , Component} from 'vue-property-decorator'
  @Component
  export default class ComContent extends Vue {

  } 
</script>
<style lang="stylus">
  .com-content
    padding 10px 20px
</style>