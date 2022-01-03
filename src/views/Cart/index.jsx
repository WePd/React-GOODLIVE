import React, { useEffect } from "react"
import NavHeader from "../../components/CityHeader"
import UserInfo from "./UserInfo"
import ShopList from "./ShopList"

export default function Cart() {
	useEffect(() => {})
	return (
		<div>
			<NavHeader title={"购物车"} />
			<UserInfo />
			<ShopList />
		</div>
	)
}
