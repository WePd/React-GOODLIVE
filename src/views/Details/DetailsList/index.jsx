import React, { useState, useEffect } from "react"
import api from "../../../api"
import DetailsView from "../DetailsView"

export default function DetailsList(props) {
	const [detailsList, setDetailsList] = useState({})
	// console.log(detailsList)
	useEffect(() => {
		api.details({ id: props.id }).then((res) => {
			if (res.data.status === 200) {
				setDetailsList(res)
				console.log(res.data.data)
			}
		})
	}, [])
	return <div>{<DetailsView data={detailsList} />}</div>
}
