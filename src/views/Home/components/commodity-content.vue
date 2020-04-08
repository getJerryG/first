<template>
      <div class='commodity'>
        <img :src="comItemData.ImgSrc" :alt="comItemData.Imgalt">
        <router-link class="title" :to="`/commodity/${comItemData.id}`">{{comItemData.title}}</router-link>
        <div class="pay">
          <div>
            <em>￥</em>
            <span>{{comItemData.pay}}</span>
          </div>
          <span v-if="comItemData.quan" class="quan">有券</span>
        </div>
      </div>
</template>
<script lang="ts">
  import { Vue , Component , Prop} from 'vue-property-decorator'

  @Component
  export default class CommodityContent extends Vue{
   @Prop() private comItemData !: {
    id: string;
    ImgSrc: string;
    Imgalt: string;
    title: string;
    pay: number;
    quan: boolean;
  }
}
</script>
<style lang="stylus">
  .commodity
    border-radius 10px
    margin-bottom 20px
    width 195px
    height 270px
    padding 10px
    display flex
    flex-direction column
    align-items center
    background-color #fff
    img
      width 150px
      height 150px
      margin-bottom 10px
    .title
      width 190px
      height 2.9em
      font-size 0.9em
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
      overflow hidden
      text-overflow ellipsis

    .pay
     width 100%
     height 50px
     display flex
     position relative
     align-items center

     em,em+span
      color #f40
      font-size 28px
      color #f40
     .quan
      color #f40
      position absolute
      align-self flex-end
      right 0
   .title:hover
    color #f40
    text-decoration underline
</style>
