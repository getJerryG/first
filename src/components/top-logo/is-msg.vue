<template>
  <div class="is-msg" @mouseover="IsMsg()">
    <span @click="logout">退出登录</span>
  </div>
</template>

<script lang="ts">
  import { Vue , Component } from 'vue-property-decorator'
  @Component
  export default class IsMsg extends Vue {
    logout(){
      this.$store.commit('logout',false)
    }
    private IsMsg(){
    console.log(this);
  }
}
</script>
<style lang="stylus" scoped>
.is-msg
  width 300px
  height 20px
  background-color #fc
  position absolute
  z-index 800
  right 165px
  top 50px
</style>