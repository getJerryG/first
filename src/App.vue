<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator'

export default class App extends Vue {
  private keepAlive = 'main-keep-alive'
  private transitionName = 'slide-right'
}
</script>
<style lang="stylus">
#app
  width 100%
  height 100%
  
</style>
