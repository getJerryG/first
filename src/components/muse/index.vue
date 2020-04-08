<template>
	<div class="muse">
		<ul>
			<li v-for="(item,index) in getClass" :key="index" >
				<i :class="item.defaultClass" 
				@mouseover="setClass($event,index)" 
				@mouseout="setdefaultClass($event,index)" />
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
import{ Vue , Component} from 'vue-property-decorator'
@Component

export default class Muse extends Vue {
	private getClass = [
		{defaultClass: 'el-icon-s-home' , className:'home'},
		{defaultClass: 'el-icon-s-custom' , className:'custom'},
		{defaultClass: 'el-icon-sell' , className:'sell'},
		{defaultClass: 'el-icon-caret-top' , className:'top'}
	]
	private setClass(e: any , index: number) {
		e.target.className = this.getClass[index].className
	}
	private setdefaultClass(e: any , index: number) {
		e.target.className = this.getClass[index].defaultClass
	}
	mounted(){
		(this.$el.children[0].children[0] as HTMLElement).onclick =() =>{
			if(this.$route.path === '/') return
			window.scrollTo(0,0)
			this.$router.push('/')			
		}
		(this.$el.children[0].children[2] as HTMLElement).onclick =() =>{
			// if(this.$route.path === '/Order') return
			// window.scrollTo(0,0)
			// this.$router.push('/Order')			
		}
		(this.$el.children[0].children[2] as HTMLElement).onclick =() =>{
			if(this.$route.path === '/Order') return
			window.scrollTo(0,0)
			this.$router.push('/Order')			
		}
		(this.$el.children[0].children[3] as HTMLElement).onclick=() => window.scrollTo(0,0);
	}
}
</script>
<style lang="stylus">
.muse
	position fixed
	width 45px 
	height 200px
	bottom 100px
	right 30px
	background-color #fff
	ul
		width 100%;
		height 100%
		display flex
		flex-direction column
		li
			flex 1
			display  flex
			flex-direction column
			justify-content space-around
			align-items center
			i
				width 100%
				height 100%
				display flex
				justify-content center
				align-items center
				font-size 24px
				color #f40
				cursor pointer
			.home::before
				content: '首页'
				font-size 14px
				font-style normal
				color #fff
			.custom::before
				content: '我'
				font-size 14px
				font-style normal
				color #fff
			.sell::before
				content: '订单查询'
				width 2em
				font-style normal
				font-size 14px
				color #fff
			.top::before
				content: '返回顶部'
				font-size 14px
				width 2em
				font-style normal
				color #fff
		:hover
			background-color #F40
</style>