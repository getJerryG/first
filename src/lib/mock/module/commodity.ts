import Mock from 'mockjs'
const demoList = {
  status: 200,
  message: 'success',
	'data': {
		picture:[
			'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00338-3897.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586076768683&di=0fdd173165d33b4e58293456abdd6e7b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e4be57ebe9c4a84a0e282bcca34b.JPG%401280w_1l_2o_100sh.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1585179789,865363869&fm=26&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1195237174,1110588766&fm=26&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3174758742,255814737&fm=26&gp=0.jpg',
		],
		'title':'森马(Senma)高帮鞋男板鞋韩版潮流2020新款春季平底透气白色休闲鞋小白鞋情侣 云雾白（男款） 41',
		description:'新春特惠：【全店满100-10，满200-20，满300-30】关注首页再送5元无门槛优惠券！支持货到付款，赠运费险！详情请点此进入首页查看~',
		'label':['关注首页再送5元无门槛优惠券','货到付款','赠运费险','详情请点此进入首页查看','有事找客服'],
		'price|66-320':66,
		'oldPrice|320-1000':520,
		'option':[{
			title:"Size",
			item:["38","39","40","41","42","43","44"]
		},{
			title:"Color",
			item:["red","black","blue"]
		},]
	}
}
export default {
  commodityData : () => {
    return Mock.mock(demoList)
    
  }
}