<template>
 <div class="commodity-id">
	<muse/>
	<top-logo />
	<p>你当前的位置:{{cont()}}</p>
	<com-exh class="tem"/>
	<com-content class="tem"/>
 </div>
</template>

<script lang="ts">
	import { Component,  Vue } from 'vue-property-decorator';
	import topLogo from "@/components/top-logo/top-logo.vue";
	import comExh from "./components/com-exh.vue"
	import muse from '@/components/muse/index.vue'
	import comContent from './components/com-content.vue'
	@Component({
		components: {
			topLogo,
			comExh,
			comContent,
			muse
		}
	})
	
	export default class CommodityId extends Vue {
		constructor() {
			super()
		}
		cont(): number{
			return 123
		}
	}
		
</script>

<style lang="stylus">
.commodity-id
	width 1140px
	margin auto
</style>
