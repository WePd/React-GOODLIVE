import React, { useRef, useEffect, useState } from "react"

export default function LoadMore(props) {
	const more = useRef()
	const [loadTop, setLoadTop] = useState()
	useEffect(() => {
		//监听页面高度
		let timer = null
		const pageHigh = document.documentElement.clientHeight //667

		function scrollHandle() {
			if (more.current) {
				setLoadTop(more.current.getBoundingClientRect().top)
				if (timer) {
					clearTimeout(timer)
				} else {
					timer = setTimeout(() => {
						if (pageHigh > loadTop) {
							props.onLoadMore()
						}
					}, 300)
				}
			}
		}
		window.addEventListener("scroll", scrollHandle)
		return () => {
			window.removeEventListener("scroll", scrollHandle)
			clearTimeout(timer)
		}
	}, [props, loadTop])
	return <div ref={more}>加载更多</div>
}
