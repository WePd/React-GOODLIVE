import React from "react"
import Star from "../../../../components/Star"

import "./style.css"
export default function Item(props) {
	const data = props.data
	// console.log(data.star)
	return (
		<div className="comment-item">
			<h3>
				<i className="icon-user"></i>
				{data.username}
				<Star num={data.star} />
			</h3>
			<p>{data.comment}</p>
		</div>
	)
}
