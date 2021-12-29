/*
 * @Author: WePD
 * @Date: 2021-12-29 18:41:30
 */
import { UPDATE_SEARCH } from "../constants"

const defaultState = {
	search: "",
}

export default function search(state = defaultState, action) {
	switch (action.type) {
		case UPDATE_SEARCH:
			return {
				search: action.search,
			}
		default:
			return state
	}
}
