/*
 * @Author: WePD
 * @Date: 2021-12-06 19:23:46
 */
const express = require("express")

const home = require("./data/home/home")
const details = require("./data/details")
const commentDate = require("./data/comment")
const shopList = require("./data/shopList")
const router = express.Router()

const Mock = require("mockjs")

const url = require("url")
const Random = Mock.Random

//在渲染的时候需要请求不同的城市页面，将城市作为参数传到后台
router.get("/home/hot1", (req, res) => {
	const cityName = url.parse(req.url, true).query.cityName
	// console.log(cityName)
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.send({
		status: 200,
		result: "homehot1数据获取成功！",
		data: home.hot1,
		city: cityName,
	})
})

router.get("/home/hot2", (req, res) => {
	const cityName = url.parse(req.url, true).query.cityName
	// console.log(cityName)
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.send({
		status: 200,
		result: "homehot2数据获取成功！",
		data: home.hot2,
		city: cityName,
	})
})

router.get("/search", (req, res) => {
	const search = url.parse(req.url, true).query.search
	console.log(search)
	//mock模仿数据
	let data = Mock.mock({
		hasMore: true,
		"data|6": [
			{
				id: Random.integer(),
				title: Random.csentence(),
				houseType: "17/19层| 4室1厅 - 273.97 ㎡",
				price: "<h3>130000</h3>",
				rentType: Random.csentence(2),
				img: Random.image("800x600", Random.color(), "#FFF", "png", Random.csentence(4)),
			},
		],
	})
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.send({
		status: 200,
		result: "Search数据获取成功",
		data: data,
	})
})

//详情页
router.get("/details", (req, res) => {
	const id = url.parse(req.url, true).query.id
	console.log(id)
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.send({
		status: 200,
		result: "details数据请求成功！",
		details,
	})
})

// 登录
router.post("/login", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
	res.send({
		status: 200,
		token: "kuiasd098q2nmn2190isamdk09asjdmk209jmsaodkaskld",
		nick: "lqy",
	})
})

// 评论
router.get("/comment", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	const id = url.parse(req.url, true).query.id
	console.log(id)
	res.send({
		status: 200,
		data: commentDate,
	})
})

//购物陈评价
router.get("/car", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	const username = url.parse(req.url, true).query.username
	console.log(username)
	res.send({
		status: 200,
		data: shopList,
	})
})

//评价
router.post("/car/comment", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	const { username, id, content } = req.body
	console.log(req)
	console.log(username, id, content)
	res.send({
		status: 200,
		msg: "Succeed",
	})
})

module.exports = router
