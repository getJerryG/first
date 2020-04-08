<template>
	<div class="option">
		<div >
			<span class='title'>{{option.title}}</span>
			<div class="item">
				<span v-for="(item,index) in option.item" 
							:key="index"
							@click="click(index,item,$event)"
							>{{item}}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue , Component , Prop} from "vue-property-decorator";


@Component
export default class Option extends Vue {

	@Prop() option!: {
		title: string;
		item: Array<string>;
		}

	private beforIndex = 1
	private befor: any= {}
	private title: string = this.option.title
	
		
	private click(index: number,item: number|string,event: any){
		const value: any = {}
		const e = event.path[1].children
		value[this.title] = item
		if(this.befor[this.title] == value[this.title]){
			e[this.beforIndex].className = " "
			this.befor = {}
			value[this.title] = " "
			console.log(value);
			
		}else{
			e[this.beforIndex].className = " "
			e[index].className = " click"
			this.beforIndex = index 
			this.befor = Object.assign(this.befor,value)
		}
			this.$emit('getOption',value)
	}
}

</script>

<style lang="stylus">
.option>div
	background-color #e3
	padding 10px 20px
	margin-bottom 20px
	display flex
	.title
		font-weight 800
		flex 2
	.item
		flex 8
		display flex
		justify-content space-evenly
		span 
			padding 5px 10px
			background-color #fff
			cursor pointer
			border-radius 10px
		:hover
			color #ffffff
			background-color rgba(255,120,0,.8)
		.click
			color #ffffff
			background-color #f40
</style>
