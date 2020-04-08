<template>
  <div class="content-list">
		<div class="img">
			<span class="radio-box">
				<input type="radio" :class="radioClick?'click': ' '" @click="radioClick = !radioClick">
			</span>
			<img :src="cart.img.src" :alt="cart.img.alt">
			<div class="content">
				<span class="title">{{cart.content.title}}</span>
			<span class="discription">
				<span v-for="(item, index) in cart.content.option" :key="index">{{item}}</span>
			</span>
			</div>
		</div>
		<div class="prive">
			<span class="new-prive">￥{{cart.content.prive}}</span>
			<span class="old-prive">￥{{cart.content.oldPrive}}</span>
		</div>
		<div class="payfor">￥{{cart.content.prive * num}}</div>
		<div class="payNum">
			<span @click="num == 0? 0 : num --" :class="num == 0? 'noclick' : 'click'">
				<span v-show="num != 0">-</span>
			</span>
			<span>{{num}}</span>
			<span @click="num == cart.content.MaxNum? cart.content.MaxNum : num ++" :class="num == cart.content.MaxNum? 'noclick' : 'click'">
				<span v-if="num != cart.content.MaxNum">+</span>
			</span>
		</div>
		<div class="something">
			<div class="del" @click="delData()">删除</div>
		</div>
  </div>
</template>
<script lang="ts">
	import { Vue , Component, Prop} from 'vue-property-decorator'

	@Component
	export default class ContentList extends Vue {
		@Prop() cart !: {
			id: string;
			img: {
				src: string ;
				alt: string;
			};
			content: {
				title: string;
				key: string[] | [];
				option: string[] | [];
				prive: number;
				oldPrive: number;
				MaxNum: number;
			};
			date: {
				date: number;
			};
		} 
		private  radioClick = true
		private num = 0
		private delData(){
			this.$emit('delSelf',this.cart.id)
		}
	}

</script>
<style lang="stylus" scoped>
.content-list
	width 100%
	height 120px
	display flex
	align-items center
	display flex
	justify-content space-between
	padding 0 10px
	background-color #fff
	margin 10px 0
	.img
		display flex
		justify-content space-between
		align-items center
		flex 2
		.radio-box
			width 16px
			height 16px
			border 1px solid #444f44
			margin-right 10px
			display flex
			align-items center
			justify-content center
			[type='radio']
				width 10px;
				height 10px
				appearance none
			.click
			::before
				content: ''
				background-color #f40
	.img
		img
			flex 1
			width 100px
			height 100px
		.content
			flex 8
			.title
				width 200px
				font-size 10px
				display -webkit-box
				-webkit-box-orient vertical
				-webkit-line-clamp 1
				overflow hidden
				text-overflow ellipsis
			.discription
				span
					font-size 10px			
	.prive
		flex 1
		display flex
		flex-direction column
		.old-prive
			color #afafaf
			text-decoration line-through
	.payfor
		flex 1
		color #f40
		font-size 18px
		font-weight 800
	.payNum
		display flex
		align-items center
		justify-content center
		flex 1
		justify-content start
		align-items center
		:nth-child(2)
			padding 0 5px
	.payNum>.click
			text-align center
			width 45px
			height 30px
			font-size 20px
			background-color #eee
			border-radius 10px
			cursor pointer
			span 
				color #f40
		.payNum>.click:hover
			background-color #f40
			span 
				color #fff
		.noclick
			text-align center
			width 45px
			height 30px
			font-size 20px
			border-radius 10px
			cursor not-allowed
			background-color #aaa
	.something
		flex 1
		div
			cursor pointer
		div:hover
			text-decoration underline
			color #f40
</style>