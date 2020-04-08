<template>
  <div class="shoppingCart">
	
	<div v-for="(item, index) in shoppingCart" :key="index">
		<content-list :cart='item'/>
	</div>
  </div>
</template>
<script lang="ts">
	import { Vue , Component } from 'vue-property-decorator'
	import contentList from './content.vue'
	import {State,Getter,Action,Mutation,namespace} from 'vuex-class'
	const shoppingCartModule = namespace('shoppingCartModule')
	@Component({
		components:{
			contentList
		}
	})
	export default class ShoppingCart extends Vue {
		@shoppingCartModule.State('itemNum') itemNum: any
		@shoppingCartModule.Getter('endDate') endDate: any
		created() {
			console.log('123',this.endDate);
			console.log('123',this.itemNum);
			
		}







		private shoppingCart = [
			
		]
	}
	
</script>
<style lang="stylus" scoped>
</style>