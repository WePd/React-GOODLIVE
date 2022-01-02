import React from "react"
import ReactDOM from "react-dom"

import "./assets/css/common.css"
import "./assets/css/font.css"
import "./assets/css/iconfont.css"
import AppRouter from "./router/index"
import "./assets/csstest/iconfont.css"
import { Provider } from "react-redux"
import store from "./redux/store/index"
ReactDOM.render(
	<Provider store={store}>
		<AppRouter />,
	</Provider>,
	document.getElementById("root")
)
