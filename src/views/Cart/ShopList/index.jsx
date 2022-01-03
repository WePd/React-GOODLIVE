import React, { useState, useEffect } from "react"
import api from "../../../api"
import ShopListView from "../ShopListView"
import "./style.css"

export default function ShopList() {
	const [data, setData] = useState([])
	useEffect(() => {
		api.car().then((res) => {
			// console.log(res.data.data)
			setData(res.data.data)
		})
	}, [])

	return (
		<div>
			<ShopListView data={data} />
		</div>
	)
}
