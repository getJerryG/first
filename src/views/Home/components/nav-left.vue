<template>
  <div class="nav-left">
      <div class="nav-list" >
        <div  v-for="(item,index) in navList" :key="index">
          <span class="title">{{item.title}}</span>
          <ul>
            <li v-for="(item,index) in item.list" :key="index">
              <router-link to="#">{{item}}</router-link>
            </li>
          </ul>
        </div>
      </div>  
  </div>
</template>
<script lang="ts">
  export default {
      name:"nav-left",
      data(){
        return{
          navList:[
            {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌","头条","快讯","品牌","头条","快讯","品牌"]
            },
             {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌"]
            },
             {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌"]
            },
             {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌"]
            },
             {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌"]
            },
             {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌"]
            },
             {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌"]
            },
             {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌"]
            },
             {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌"]
            },
             {
              title:"资讯",
              list:["头条","快讯","品牌","头条","快讯","品牌"]
            },
          ]
        }
      }
  }
</script>
<style lang="stylus">
.nav-left
  background-color #fff
  .title
    display block
    color #f40
    font-weight 800
    padding 5px 0 5px 10px 
    border-left 2px solid #f40
    background-color #30e9ff
  ul
      display flex
      flex 1
      flex-wrap  wrap
      li
        display flex
        align-items center  
        
      :hover
          color #fff
          background #f40
        a
          padding 5px
          display block
</style>