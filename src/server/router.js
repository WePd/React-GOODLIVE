const express = require('express')

const home = require('./data/home/home')

const router = express.Router()


router.get('/home/hot1', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send({
    status: 200,
    result: 'homehot1数据获取成功！',
    data: home.hot1
  })
})


router.get('/home/hot2', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send({
    status: 200,
    result: 'homehot2数据获取成功！',
    data: home.hot2
  })
})


module.exports = router