import React from "react"
//导入路由
import { HashRouter, Route, Switch } from "react-router-dom"

import Layout from "../views/Main/Layout"

//导入页面
import Home from "../views/Main/Home"
import LifeService from "../views/Main/LifeService"
import Shop from "../views/Main/Shop"
import User from "../views/Main/User"
//配置city路由
import City from "../views/City"

//导入底部导航
import NavBottom from "../components/NavBottom"
import Search from "../views/Search"

//详情页
import Details from "../views/Details"

const AppRouter = () => {
	return (
		<HashRouter>
			<Switch>
				{/* City路由 */}
				<Route path="/city" component={City}></Route>
				<Route path="/details/:id" component={Details}></Route>
				<Route path="/search/:keywords" component={Search}></Route>
				<Layout path="/">
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route path="/life" component={LifeService}></Route>
						<Route path="/shop" component={Shop}></Route>
						<Route path="/user" component={User}></Route>
					</Switch>
					<NavBottom />
				</Layout>
			</Switch>
		</HashRouter>
	)
}
export default AppRouter
