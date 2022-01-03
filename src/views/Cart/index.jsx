import React, { useEffect } from "react"
import NavHeader from "../../components/CityHeader"
import UserInfo from "./UserInfo"

import "./style.css"

export default function Cart() {
	return (
		<div>
			<NavHeader title={"购物车"} />
			<UserInfo />
		</div>
	)
}
