<template>
  <div class="order">
		<muse/>
		<ul class="mune">
			<router-link 
			v-for="(item,index) in routerLink"
			:key="index"
			:to="`/Order/${item.to}`"
		>{{item.name}}</router-link>
		</ul>
		<ul class="top-bar">
			<li>商品信息</li>
			<li>单价</li>
			<li>数量</li>
			<li>金额</li>
			<li>操作</li>
		</ul>
		<router-view class="content"></router-view>
  </div>
</template>
<script lang="ts">
	import { Vue , Component} from 'vue-property-decorator'
	import muse from '@/components/muse/index.vue'
	@Component({
		components:{
			muse
		}
	})
	export default class Order extends Vue {
		private routerLink = [
			{to:'shoppingCart',name:"购物车"},
			{to:'waitpay',name:"待付款"},
			{to:'delivery',name:"待发货"},
			{to:'receiv',name:"待收货"},
			{to:'evaluate',name:"待评价"},
		]
		private routerOnClick(e: any){
			e.target.className = "click"
		}

	}

</script>
<style lang="stylus" scoped>
	.order
		width 1340px
		margin 0 auto
		padding 20px 30px
		.mune
			height 45px
			display flex
			background-color #fff
			align-items center
			background-image linear-gradient(45deg , rgba(255,63,0,0.8),rgba(0,63,255,0.3))
			border-radius 10px
			a
				flex 1
				display flex
				align-items center
				justify-content center
				color #fff
				font-weight bold 
				height 100%
			:hover
				color #f40
				background-color rgba(230,255,255,0.6)
			.router-link-exact-active
				color #ffffff
				background-color #f40
				border-bottom 3px solid #e344ef
		.top-bar
			width 100%
			display flex
			justify-content space-between
			:nth-child(1)
				flex 2
			:nth-child(2)
				flex 1
			:nth-child(3)
				flex 1
			:nth-child(4)
				flex 1
			:nth-child(5)
				flex 1
</style>