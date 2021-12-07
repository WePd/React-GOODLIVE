import React from "react";
import { Link } from "react-router-dom"
import './index.css'


const NavHeader = () => {
  return (
    <div id="home-header" className="clear-fix">
      <div className="home-header-left float-left">
        <Link to='/city'>成都</Link>
        <i className="icon-angle-down"></i>
      </div>
      <div className="home-header-right float-right">
        <i className="iconfont icon-car"></i>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
          <i className="icon-search"></i>
          <input />
        </div>
      </div>
    </div>
  )
}

export default NavHeader