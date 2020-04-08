<template>
  <div class="swiper">  
    <el-carousel  height="460px" >
      <el-carousel-item v-for="(item,index) in src" :key="index">
      <img :src='item' :alt="alt" >
      <router-link to="#"></router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script >
  export default {
      name:"swiper",
      data(){return{
        alt:123,
      }},
      computed:{
        src(){
             return [
               require(`@/assets/img/jd1.jpg`),
               require(`@/assets/img/jd2.jpg`),
               require(`@/assets/img/jd3.jpg`),
               require(`@/assets/img/jd4.jpg`),
               require(`@/assets/img/jd5.jpg`),
             ]
        }
      }
  }
</script>
<style lang="stylus">
  .swiper
    overflow hidden
    img
      width 100%
      height 100% 
      border-radius 10px


</style>