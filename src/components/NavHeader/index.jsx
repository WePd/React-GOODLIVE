import React from "react"
import { Link } from "react-router-dom"
import SearchInput from "../SearchInput"

import "./index.css"

const NavHeader = (props) => {
	return (
		<div id="home-header" className="clear-fix">
			<div className="home-header-left float-left">
				<Link to="/city">{props.city}</Link>
				<i className="icon-angle-down"></i>
			</div>
			<div className="home-header-right float-right">
				<Link to="/cart">
					<i className="iconfont icon-car"></i>
				</Link>
			</div>
			<div className="home-header-middle">
				<div className="search-container">
					<i className="icon-search"></i>
					<SearchInput />
				</div>
			</div>
		</div>
	)
}

export default NavHeader
