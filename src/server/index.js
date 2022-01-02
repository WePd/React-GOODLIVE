const express = require("express")
const app = express()
const router = require("./router")
const bodyParser = require("body-parser")

app.use("/api", router)
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.listen(8888, () => {
	console.log("服务器启动！！")
})
