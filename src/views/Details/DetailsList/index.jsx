import React, { useState, useEffect } from "react"
import api from "../../../api"
import DetailsView from "../DetailsView"

export default function DetailsList(props) {
	const [detailsList, setDetailsList] = useState({})
	console.log(detailsList)
	useEffect(() => {
		api.details({ id: props.id }).then((res) => {
			if (res.status === 200) {
				console.log("kok")
				setDetailsList(res.data.details)
			}
		})
	}, [])
	return <div>{detailsList.imgs ? <DetailsView data={detailsList} id={props.id} /> : <div>数据加载中.....</div>}</div>
}
