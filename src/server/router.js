/*
 * @Author: WePD
 * @Date: 2021-12-06 19:23:46
 */
const express = require('express');

const home = require('./data/home/home');
const searchData = require('./data/search');

const router = express.Router();

//在渲染的时候需要请求不同的城市页面，将城市作为参数传到后台
const url = require('url');

router.get('/home/hot1', (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName;
  // console.log(cityName)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send({
    status: 200,
    result: 'homehot1数据获取成功！',
    data: home.hot1,
    city: cityName,
  });
});

router.get('/home/hot2', (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName;
  // console.log(cityName)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send({
    status: 200,
    result: 'homehot2数据获取成功！',
    data: home.hot2,
    city: cityName,
  });
});

router.get('/search', (req, res) => {
  const search = url.parse(req.url, true).query.search;
  console.log(search);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send({
    status: 200,
    result: 'Search数据获取成功',
    data: searchData,
  });
});

module.exports = router;
