/*
 * @Author: WePD
 * @Date: 2021-12-29 18:53:16
 */
import { UPDATE_SEARCH } from "../constants"

export function searchDate(search) {
	return {
		type: UPDATE_SEARCH,
		search,
	}
}
