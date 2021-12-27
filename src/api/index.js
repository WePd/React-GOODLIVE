/*
 * @Author       : WePD
 * @Date         : 2021-11-28 10:49:40
 */
import axios from '../utils/request';

//路径地址
const base = {
  baseURL: 'http://localhost:8888',
  cityUrl: '/api/aj/getcitycode',
  homehot1: '/api/home/hot1',
  homehot2: '/api/home/hot2',
  search: '/api/search',
};
//  请求方法
const api = {
  //获取首页热门商品
  getHomeHot1(params) {
    return axios.get(base.baseURL + base.homehot1, {
      params,
    });
  },
  getHomeHot2(params) {
    return axios.get(base.baseURL + base.homehot2, {
      params,
    });
  },
  getCityList() {
    return axios.get(base.cityUrl);
  },
  //搜索
  search(params) {
    return axios.get(base.baseURL + base.search, {
      params,
    });
  },
};

export default api;
