import Mock from 'mockjs'
const demoList = {
  status: 200,
  message: 'success',
  'data|2000': [{
    id: '@guid',
    'ImgSrc|1':[
      'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00338-3897.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586076768683&di=0fdd173165d33b4e58293456abdd6e7b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e4be57ebe9c4a84a0e282bcca34b.JPG%401280w_1l_2o_100sh.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1585179789,865363869&fm=26&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1195237174,1110588766&fm=26&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3174758742,255814737&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=177895430,1987748231&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2025269399,1921322503&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2936957502,3174598288&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1964862888,1345695817&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1964862888,1345695817&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1355753137,3098363005&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1314750806,226819709&fm=11&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=596062473,1385834665&fm=11&gp=0.jpg'
    ],
    'Imgalt|':Mock.Random.cparagraph( 5 , 12 ),
    "title|":Mock.Random.cparagraph( 5 , 12 ),
    "pay|20-30":20,
    'quan|1':true
  }]
};
export default {
  commoditysData : () => {
    return Mock.mock(demoList)
    
  }
}