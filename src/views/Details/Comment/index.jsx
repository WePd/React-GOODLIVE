import React, { useEffect, useState } from "react"
import CommentView from "../CommentView"
import api from "../../../api"

export default function Comment(props) {
	const id = props.id
	console.log(id)
	useEffect(() => {})
	return (
		<div>
			<h3>comment</h3>
			<CommentView />
		</div>
	)
}
