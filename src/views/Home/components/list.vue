<template>
      <div class="list">
        <div class="title">
            <span >别人都在搜</span>
            <router-link class="details" to="">详情</router-link>
        </div>
        
        <ul >
          <li v-for="(item,index) in newslist" :key='index'>
            <span v-if="item.type">[{{item.type}}]</span>
            <router-link :to="item.url">{{item.title}}</router-link>
          </li>
        </ul>
    </div>
</template>
<script >
  export default {
      name:"list",
      data(){
        return{
          src:require('@/assets/img/tx.jpg'),
          newslist:[
            {
              url:"https://baidu.com",
              type:'',
              title:"抗衰老？防感冒？一道汤就可以解决了"
            },
            {
              url:"https://baidu.com",
              type:"热点",
              title:"抗衰老？防感冒？一道汤就可以解决了"
            },
            {
              url:"https://baidu.com",
              type:'',
              title:"抗衰老？防感冒？一道汤就可以解决了"
            },
            {
              url:"https://baidu.com",
              type:"热点",
              title:"抗衰老？防感冒？一道汤就可以解决了"
            }
            ],
            aaalist:[
            {
              url:"https://baidu.com",
              type:'',
              title:"抗衰老？防感冒？一道汤就可以解决了"
            },
            {
              url:"https://baidu.com",
              type:"热点",
              title:"抗衰老？防感冒？一道汤就可以解决了"
            },
            {
              url:"https://baidu.com",
              type:'',
              title:"抗衰老？防感冒？一道汤就可以解决了"
            },
            {
              url:"https://baidu.com",
              type:"热点",
              title:"抗衰老？防感冒？一道汤就可以解决了"
            }
            ]
        }
      }

  }
</script>
<style lang="stylus">
.list
    margin 0 0 10px 0
    .title
        color #333
        background-color #f3f3f3
        border-left 5px solid #f40
        padding 5px 0 5px 10px
        position relative
        display flex
        align-items center
        .details
            position absolute
            color #f40
            font-size 12px
            right 10px
    ul
        li
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 1
            overflow hidden
            text-overflow ellipsis
            span
                font-size 12px
                color #f40
            a
                font-size 12px       
            :hover
                color #f40
</style>