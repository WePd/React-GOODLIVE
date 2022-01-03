import React, { useEffect, useState } from "react"
import CommentView from "../CommentView"
import api from "../../../api"

export default function Comment(props) {
	const id = props.id
	console.log(id)
	const [commentList, setCommentList] = useState([])
	useEffect(() => {
		api.comment().then((res) => {
			setCommentList(res.data.data.data)
		})
	}, [])
	return <div>{commentList.length ? <CommentView commentList={commentList} /> : <div>评论加载中.......</div>}</div>
}
