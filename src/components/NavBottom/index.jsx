import React from "react";
import { NavLink } from 'react-router-dom'

import style from './index.less'
import '../../assets/css/iconfont.css'

const NavBottom = () => {
  return (
    <div className={style.nav_footer}>
      <ul className='clear-fix'>
        <li>
          <NavLink exact to='/'>
            <i className='iconfont icon-home'></i>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/shop'>
            <i className='iconfont icon-shop'></i>
            商场
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/life'>
            <i className='iconfont icon-trophy'></i>
            生活服务
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/user'>
            <i className='iconfont icon-team'></i>
            我的
          </NavLink>
        </li>
      </ul>
    </div >
  )
}

export default NavBottom