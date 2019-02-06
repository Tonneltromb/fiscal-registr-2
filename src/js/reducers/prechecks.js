import { REQUEST, SUCCESS, FAIL, CACHE, PRECHEK_GET_LIST } from '../constants'
import { normalizeEntity } from '../utils/normalize.js'

const initialState = {
	prechecks: {},
	allPrechecksCount: 0,
	loadingPrechecks: null
};

export default (state = initialState, { type, payload = {}, other = {} }) => {
	const { error } = payload;
	switch (type) {
		case PRECHEK_GET_LIST + REQUEST: {
			return { ...state, loadingPrechecks: true }
		}

		case PRECHEK_GET_LIST + SUCCESS: {
			return {
				...state,
				loadingPrechecks: false,
				allPrechecksCount: payload.count,
				prechecks: {
					...state.prechecks,
					...normalizeEntity({ data: payload.prechecks, entities: 'prechecks', key: 'id' })
				}
			}
		}

		case PRECHEK_GET_LIST + FAIL: {
			return { ...state, loadingPrechecks: null, error }
		}

		default:
			return state
	}
}
