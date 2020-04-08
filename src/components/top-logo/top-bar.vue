<template>
    <div class="top-bar">
        <div class="search">
            <i class="el-icon-search"/>
            <input type="text">
            <i class="el-icon-camera"/>
        </div>
            <button>搜索</button>

    </div>
</template>
<script lang='ts'>
import { Component,  Vue } from 'vue-property-decorator';

@Component
export default class TopBar extends Vue{

}
</script>

<style lang="stylus">
.top-bar
    display flex
    .search
        flex 9
        padding  5px 20px 
        border 2px solid #f40
        border-top-left-radius  20px
        border-bottom-left-radius  20px
        display flex
        align-items center
        justify-content space-between
        input
            width 100%
    button
        flex 2

        background-color #f40
        color #fff
        border-top-right-radius  20px
        border-bottom-right-radius  20px
</style>