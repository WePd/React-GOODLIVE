import { FAVORITE_CANCEL, FAVORITE } from "../constants"

const defaultState = []

export default function FavHanle(state = defaultState, action) {
	switch (action.type) {
		case FAVORITE:
			return [...state, action.favorite]
		case FAVORITE_CANCEL:
			const faviteIndex = state.findIndex((item) => item === action.id)
			return [...state.slice(0, faviteIndex), ...state.slice(faviteIndex + 1)]
		default:
			return state
	}
}
