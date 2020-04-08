<template>
  <div class="coupons" >
    <button class="left" @click="(pageIndex -= 1) && a()" prohibit>&lt;</button>
    <button class="right" @click="(pageIndex += 1) && a()" prohibit>&gt;</button>
    <div ref="cou">  
      <coupon v-for="(item,index) in getCouponValue" :key="index" :coupon="item" @click.native="getCouponiofn(index,)"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue , Component , Prop , Watch} from "vue-property-decorator"
import {Mutation , namespace} from 'vuex-class'
import Coupon from './coupon.vue';
import {PerSizeCompons , PerSozeComponsObj} from '@/lib/js/perSizeCompons'
const couponModule = namespace('couponModule')

@Component({
  components:{  
    Coupon
  }
})
export default  class Coupons extends Vue {
  private perSize = 1
  private pageIndex = 1
  private itemIndex = 5
  private coupons = [
    {
      pay:100,
      satisfy:500,
      description:"仅可购买XXX的商品"
    },
      {
      pay:200,
      satisfy:500,
      description:"仅可购买XXX的商品"
    },
    {
      pay:300,
      satisfy:500,
      description:"仅可购买XXX的商品"
    },
      {
      pay:400,
      satisfy:500,
      description:"仅可购买XXX的商品"
    },
    {
      pay:500,
      satisfy:500,
      description:"仅可购买XXX的商品"
    },
    {
      pay:600,
      satisfy:600,
      description:"仅可购买XXX的商品"
    },  
  ]
  private a(){
    this.$emit("setCouponsShow",123)
  }
  private getCouponiofn(index: number ){
    return (this.$refs.cou as HTMLElement).children[index].className += ' couponClick' 
  }
  private get getCoupon(){
    return this.coupons
  }
  
  
  private get getCouponValue(): any{
    interface CouponObj {
      date: string;
      effective: number;
      pay: number; //
      satisfy: number;
      description: string;
    }
    const obj: PerSozeComponsObj = {
      showPageButton : false,
      pageIndex : this.pageIndex<1 ? 1 : this.pageIndex, 
      total:this.coupons.length,
      pageItemNum:3
    }
    const data = new PerSizeCompons(obj , this.coupons)
    return data.getdata
  }
  
}
</script>
<style lang="stylus">
.coupons
  padding 10px
  width 240px 
  display block
  white-space:nowrap
  position relative
.coupons>.left,.coupons>.right
  position absolute
  width 30px
  height h=30px
  z-index 1000
  align-self center
  color #fff
  border-radius 50%
  opacity 0
  top 50%
  margin-top -(h/2)
.coupons>.left
  left 0
.coupons>.right
  right 0
.coupons:hover>.right,.coupons:hover>.left
  opacity 1
  background-color rgba(130,155,155,0.2)
.coupons>.left:hover,.coupons>.right:hover
  background-color rgba(30,155,155,0.5)
.coupons>div
  height 340px
  display flex
  flex-direction column
  overflow hidden
  justify-content space-between
  </style>