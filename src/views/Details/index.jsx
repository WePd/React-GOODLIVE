import React from "react"
import { useParams } from "react-router-dom"
import DetailsList from "./DetailsList"
export default function Detials() {
	const params = useParams()
	console.log(params.id)
	return (
		<div>
			<DetailsList id={params.id} />
		</div>
	)
}
