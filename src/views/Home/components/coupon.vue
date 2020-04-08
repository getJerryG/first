<template>
  <div class="coupon">
    <div class="click"></div>
      <div class="box">
        <div class="left">
            <div>
              <span class="pay">
                <em>￥</em>
                <span>{{coupon.pay}}</span>
              </span>
              <span class="satisfy">满{{coupon.satisfy}}元使用</span>
            </div>
            <span class="description">{{coupon.description}}</span>
        </div>  
        <div class="right">
          <div>点击领取</div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue , Component ,  Prop} from 'vue-property-decorator'
@Component
export default class Coupon extends Vue {
@Prop() coupon !: {
  pay: number;
  satisfy: number;
  description: string;
}

}
</script>
<style lang="stylus">
.coupon
  display inline-flex
  position relative
  .box
    width 100%
    height 100px
    background  url("https://misc.360buyimg.com/user/quan/3.0.0/widget/quan-index/i/quan-bg.png") no-repeat
    background-size 100% 100%
    display flex
    cursor pointer
    .left
      flex 8
      display flex
      flex-direction column
      justify-content center
      div
        flex 7
        display flex
        align-items center
        justify-content space-around
        .pay
          em
            color #fff
            font-size 30px
          :last-child
            color #fff
            font-size 30px
        .satisfy
          color #fff
          font-size 14px
      .description
        flex 3 
        color #fff
        text-align center
    .right
      flex 2
      display flex
      justify-content center
      align-items center
    .right>div
      width 20px
      color #fff
      white-space pre-wrap
.couponClick .box>.left div .pay em,
.couponClick .box>.left div .pay :last-child,
.couponClick .box>.left div .satisfy,
.couponClick .box>.left .description,
.couponClick .box>.right div
  color #a3a3a3
.couponClick::before
  content " "
  position absolute
  background url("https://misc.360buyimg.com/user/quan/3.0.0/widget/quan-index/i/geted.png") no-repeat
  width 100px
  height  100px
  align-self center 
  top 25%
  left 25%
</style>