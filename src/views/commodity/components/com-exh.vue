<template>
  <div class="com-exh">
    <div class="exh">
			<div class="img">
				<img :src="commodity.picture[src]" :alt="commodity.title" @mouseover="ImgmouseOver($event)">
			</div>
			<div class="box">
					<img :src="item"
						v-for="(item,index) in commodity.picture"
						:key="index"
						@mouseover="mouseover(index)"
						>
			</div>
		</div>

      <div class="con">
				<h1>{{commodity.title}}</h1>
				<div class="description">{{commodity.description}}</div>
				<div class="label" >
					<span v-for="(item,index) in commodity.label" :key="index">[{{item}}]</span>
				</div>
				<div class="price">
					<div class="new-price">
						<em>￥</em><span>{{commodity.price}}</span>
					</div>
					<div class="old-price">
						<em>￥</em><span>{{commodity.oldPrice}}</span>
					</div>
				</div>
				<div class="option-box">
				<Option @getOption="getOption" :option='item' v-for="(item,index) in commodity.option" :key="index"/>
				</div>
				<div class="btn-box">
					<div class="btn">购买</div>
					<div class="btn" @click="addShopping()">加入购物车</div>
				</div>
			</div>
  </div>
</template>
<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';
import Option from '@/components/option.vue';


@Component({
	components:{
		Option
	}
})

export default class ComExh extends Vue{
	private src = 0
	private value: any = {}
	private commodity = {}
	
	created() {
		this.axios.get('/commodity')
		.then(res => {
			console.log(res);
			this.commodity = res.data.data
		})
		.catch(reason => {
			console.log(reason);
			
		})	
	}

	private get getOptionValue(){
		console.log(this.value);
		return this.value
	}
	private mouseover(index: number) {
		this.src = index
	}
	
	private	getOption(option: any)	{
		console.log('option:::',option);
		this.value = Object.assign({},this.value,option)
		console.log("value:::",this.value);
	}
	private ImgmouseOver(event: any){
		// console.log(window);
	}
	private addShopping() {
		(this.$loading as any).show('loading');
		(this.$loading as any).show('loading')

	}

}

</script>
<style lang='stylus'>
.com-exh
	height 600px
	display flex
	padding 10px 0
	width 1140px
	.exh
		width 50%
		.img
			padding 20px
			height 450px
			flex 3
			img
				border-radius 3%
				height 100%
				width 100%
	.con
		flex 6
		position relative
		h1
			margin 20px 0
		.description
			color #f40
			display inline-block
			font-size 14px
		.label
			display inline
			cursor pointer
			span
				color #f40
				margin-right 10px
		.price
			margin 20px 0  20px 0
			padding 10px 0
			display flex
			background-color #e3e3e3
			.new-price
				em,span
					color #f40
					font-size 28px
			.old-price
				color #939393
				em,span
					color #939393
				text-decoration line-through
		.option-box
			height 240px
			overflow-y auto
		.btn-box
			text-align center
			margin-top -10px
			.btn
				cursor pointer
				padding 10px 20px
				background-color #f3f3f3
				display inline-block
				border-radius :10px
				margin 10px
			.btn:hover
				color #fff
				background-color #f40
		.label span:hover
			text-decoration underline
			color #f40
	.box
		padding 0 10px
		width 500px
		height 100px
		display flex
		justify-content space-between
		align-items center
		img
			width 90px
			height 90px
			cursor pointer
	.option-value
		display flex
	.option-value>span
		margin-right 20px
	.option-value>div
		margin-right 10px
	.option-value>div>:nth-child(1)
		font-weight 800
	.option-value>div>:nth-child(2)
		color #f40
		margin-left 10px
</style>




