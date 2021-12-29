import "./style.css"
import React, { useState, useEffect } from "react"
import { withRouter, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as searchAction from "../../redux/actions/search"

function SearchInput(props) {
	const [keywords, setKeyWords] = useState("")
	const dispatch = useDispatch()
	const reduxKeyWords = useSelector((state) => state.search)
	const params = useParams()

	function keyUpHandle(e) {
		if (keywords) {
			if (e.keyCode === 13) {
				// console.log(props)
				props.history.push("/search/" + keywords)
				dispatch(searchAction.searchDate(keywords))
			}
		}
	}
	useEffect(() => {
		// console.log(params)
		if (params.keywords) {
			dispatch(searchAction.searchDate(params.keywords))
		} else {
			dispatch(searchAction.searchDate(""))
		}
		setKeyWords(reduxKeyWords.search)
	}, [params.keywords, reduxKeyWords.search])

	function changeHandle(e) {
		setKeyWords(e.target.value)
	}
	return <input type="text" className="search-input" onKeyUp={keyUpHandle} value={keywords} onChange={changeHandle} />
}

export default withRouter(SearchInput)
