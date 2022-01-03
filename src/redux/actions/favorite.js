import { FAVORITE, FAVORITE_CANCEL } from "../constants"

export function setFavorite(favorite) {
	return {
		type: FAVORITE,
		favorite,
	}
}

export function calcelFavorite(id) {
	return {
		type: FAVORITE_CANCEL,
		id,
	}
}
