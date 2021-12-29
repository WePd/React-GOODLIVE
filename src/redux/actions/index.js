/*
 * @Author: WePD
 * @Date: 2021-12-08 16:47:18
 */
import { INIT_CITY, CHANGE_CITY } from "../constants"

export function initCity(cityName) {
	return {
		type: INIT_CITY,
		cityName,
	}
}

export function changeCity(cityName) {
	return {
		type: CHANGE_CITY,
		cityName,
	}
}
