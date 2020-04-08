
export interface ItemNum {
	itemNum: number;
}

export interface UserLogin {
	cookie: string;
	token: boolean;
	userName: string;
}

export interface Loading {
	info?: string;
	loading: boolean;
}
export interface State{
	item: ItemNum[];
	userLogin: UserLogin;
	loading: Loading;
}

const state: State = {
	item:[
		{
			itemNum:1
		}
	],
	userLogin:{
		cookie:'',
		token:true,
		userName:"好喜欢你"
	},
	loading: {
		info:'正在加载',
		loading:false
	}
}
export default state