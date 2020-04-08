<template>
  <div class="myBtn">
    <button><slot></slot></button>
  </div>
</template>
<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
@Component
export default class MyBtn extends Vue{

} 

</script>