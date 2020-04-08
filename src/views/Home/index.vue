<template>
  <div class="Home">
    <muse/>
    <top-logo class="tem"/>
    <cont />
		<div class="content" ref="content">
			<coupons class="tem" @setCouponsShow="setCouponsShow"/>
			<commodity-content :comItemData="item" v-for="(item , index) in commoditys" :key="index" />
			
		</div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
  import topLogo from "@/components/top-logo/top-logo.vue" ;
  import cont from './components/cont.vue';
  import coupons from './components/coupons.vue';
  import commodityContent from './components/commodity-content.vue';
  import muse from '@/components/muse/index.vue'
	import { Component,  Vue } from 'vue-property-decorator';
  import waterfall from '@/lib/js/waterfall'
	
	@Component({
		components: {
			topLogo,
			cont,
			coupons,
      commodityContent,
      muse
		}
	})
	export default class Home extends Vue{
    constructor(){
      super()
      
    }
    private commoditys = []
    private commoditysData = []
    private scrolly = 0
    private setCouponsShow(a: any){
      console.log("a",a);
    }
    created() {
      (this.$loading as any).show("loading")
      this.axios.get('/commoditys')
      .then((res: any) =>{
        this.commoditys = res.data.data.splice(0,10)
        this.commoditysData = res.data.data;
      (this.$loading as any).hide("loading")
      }) 
      .catch((err: any) =>console.log(err))
    }
    private  windowSlloheight(){
      const height = window.scrollY
      const num = Math.floor(height/200)      
      if(height>this.scrolly*num){
        this.commoditys = this.commoditys.concat(this.commoditysData.splice(this.scrolly*20,(this.scrolly + 1)*20 -1));          
        this.scrolly =num*this.scrolly;

      }
    }
    mounted() {
      window.addEventListener('scroll', this.windowSlloheight)
     return 123
    }
    updated() {
      const event = (this as any).$refs.content, childrenList = event.children;
      let i = 0;      
      new waterfall(event)
      for(;i <childrenList.length -1;i ++){
        childrenList[i].onmouseover = function() {
          this.style.boxShadow = "5px -5px 5px #909090";
        }
        childrenList[i].onmouseout = function() {
          this.style.boxShadow = "none";
        }
      } 
    }
 }
</script>
<style lang="stylus">

  
.Home
	width 1190px
	margin auto
	.content
		.coupons
			width 200px
    :hover
      box-shadow 5px 5px 5px #000
    .commodity-content
      width 300px
      display flex
</style>

