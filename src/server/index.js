const express = require('express')
const app = express()
const router = require('./router')


app.use('/api', router)

app.listen(8888, () => {
  console.log('服务器启动！！')
})