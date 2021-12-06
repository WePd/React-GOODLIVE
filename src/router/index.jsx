import React from "react";
//导入路由
import { HashRouter, Route, Switch } from 'react-router-dom'
//导入页面
import Home from '../views/Home'
import LifeService from '../views/LifeService'
import Shop from '../views/Shop'
import User from '../views/User'


//导入底部导航
import NavBottom from "../components/NavBottom";
const AppRouter = () => {
  return (
    <HashRouter>
      <NavBottom />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/life' component={LifeService}></Route>
        <Route path='/shop' component={Shop}></Route>
        <Route path='/user' component={User}></Route>
      </Switch>
    </HashRouter >
  )
}
export default AppRouter