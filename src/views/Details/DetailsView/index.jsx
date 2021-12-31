import React from "react"
import Swipre from "../../../components/Swiper"

export default function DetailsView(props) {
	let data = props.data
	console.log(data)
	return (
		<div>
			<Swipre banners={data.imgs} />
		</div>
	)
}
