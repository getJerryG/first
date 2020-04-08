<template>
  <div class="cont ">
    <nav-left v-if="nav"/>
     <swiper/>
     <personal v-if="nav"/>
  </div>
</template>

<script>
// @ is an alias to /src
  import swiper from "./swiper";
  import navLeft from "./nav-left";
  import personal from "./personal";
  
export default {
  name: 'cont',
  components: {
    swiper,
    navLeft,
    personal
  },
  data(){return{
    nav:true
  }},
  mounted(){
    window.onresize = () => {  //当窗口发生改变时触发 
      if(window.innerWidth < 1300){
          this.nav = false
      }else{
        this.nav =true
      }
    };
  }
}
</script>
<style lang="stylus">
	.cont
		height 460px
		display flex
    
		justify-content space-between
		.nav-left
			width 17%
			
			overflow hidden
			overflow-y auto
    .swiper
			width 60%
		
		.personal
			width 20%
        
</style>
