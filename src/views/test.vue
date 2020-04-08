<template>
  <div class="test">
    <myBtn>123</myBtn>
    <myBtn>123</myBtn>
    <myBtn>123</myBtn>
    <myBtn>123</myBtn>
    <myBtn>123</myBtn>
    <myBtn>123</myBtn>

  </div>
</template>
<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
import myBtn from '@/components/buttom/index.vue';

@Component({
  components:{
    myBtn
  }
})
export default class Test extends Vue{
  
} 
</script>