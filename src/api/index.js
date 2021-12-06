import axios from '../utils/request'

//路径地址
const base = {
  baseURL: 'http://localhost:8888',
  homehot1: '/api/home/hot1',
  homehot2: '/api/home/hot2'
}
//  请求方法
const api = {
  //获取首页热门商品
  getHomeHot1() {
    return axios.get(base.baseURL + base.homehot1)
  },
  getHomeHot2() {
    return axios.get(base.baseURL + base.homehot2)
  }
}

export default api
