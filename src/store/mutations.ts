import { State , Loading} from './state'

export default {
	getItemNum(state: State, id: number){
		state.item.map(item => {
			item.itemNum = id
		})
	},
	setIsloading(state: State , flag: Loading) {
		state.loading.info = flag.info;
		state.loading.loading = flag.loading
	},
	logout(state: State , flag: boolean) {
		state.userLogin.cookie = ''
		state.userLogin.token = flag
	}
}