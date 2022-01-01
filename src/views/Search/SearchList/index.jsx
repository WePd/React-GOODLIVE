import React, { useState, useEffect } from "react"
import SearchListView from "../SearchListView"
import api from "../../../api/index"
import LoadMore from "../../../components/LoadMore"

export default function SearchList(props) {
	const [searchData, setSearchData] = useState([])
	const [hasMore, setHasMore] = useState(false)

	useEffect(() => {
		api
			.search({
				search: props.search,
			})
			.then((res) => {
				if (res.status === 200) {
					setSearchData((searchData) => searchData.concat(res.data.data.data))
					setHasMore(res.data.data.hasMore)
				}
			})
			.catch((err) => {
				console.log(err.message)
			})
		return () => {
			setSearchData([])
			setHasMore(false)
		}
	}, [props.search])

	function onLoadMoreHandle() {
		api
			.search({
				search: props.search,
			})
			.then((res) => {
				if (res.status === 200) {
					setSearchData(searchData.concat(res.data.data.data))
					setHasMore(res.data.data.hasMore)
				}
			})
			.catch((err) => {
				console.log(err.message)
			})
	}

	return (
		<div>
			{searchData.length > 0 ? <SearchListView searchData={searchData} /> : <div>等待数据加载！！</div>}

			{hasMore ? <LoadMore onLoadMore={onLoadMoreHandle} /> : <div>被你看完了</div>}
		</div>
	)
}
