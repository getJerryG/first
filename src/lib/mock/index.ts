// 首先引入Mock
import Mock from 'mockjs'
import usersApi from './module/users'
import commoditysApi from './module/commoditys'
import commodityApi from './module/commodity'
  Mock.setup({
    timeout:0-300
  })
  Mock.mock('/users','get',usersApi.usersData)
  Mock.mock('/commoditys','get',commoditysApi.commoditysData)
  Mock.mock('/commodity','get',commodityApi.commodityData)
export default Mock