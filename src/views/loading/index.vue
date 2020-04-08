<template>

  <div v-if="isShow" class="loading">
    <msg loading/>
    <div>{{msg}}</div>
  </div>
</template>
<script lang="ts">
import { Vue ,Component, Prop} from 'vue-property-decorator';
import state from '@/store/state';

@Component({
  components:{
    Msg:()=> import('@/components/msg.vue')
  }
})
export default class Loading extends Vue {
  private isShow = false;
  private msg = ''
}
</script>
<style lang="stylus" scoped>
.loading
  position absolute
  width 100%
  height 100%
  top 0
  background-color rgba(255,255,255,.3)
  z-index  2000
</style>