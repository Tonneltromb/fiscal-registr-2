import {
	REQUEST,
	SUCCESS,
	FAIL,
	CACHE,
	EVOTOR_GET_SHOPS,
	EVOTOR_GET_TERMINALS,
	EVOTOR_GET_CASHIERS
} from '../constants'
import { normalizeEntity, normalizeForTerminals, normalizeForCashiers } from '../utils/normalize.js'

const initialState = {
	shops: {},
	terminals: {},
	cashiers: {},
	loadingShops: null,
	loadingTerminals: null,
	loadingCashiers: null
	// activeShop: ''
}

export default (state = initialState, { type, payload = {}, other = {} }) => {
	const { error } = payload

	switch (type) {
		case EVOTOR_GET_SHOPS + REQUEST: {
			return { ...state, loadingShops: true }
		}

		case EVOTOR_GET_SHOPS + SUCCESS: {
			return {
				...state,
				loadingShops: false,
				shops: {
					...state.shops,
					...normalizeEntity({ data: payload, entities: 'shops', key: 'uuid' })
				}
			}
		}

		case EVOTOR_GET_SHOPS + FAIL: {
			return { ...state, loadingShops: null, error }
		}

		case EVOTOR_GET_TERMINALS + REQUEST: {
			return { ...state, loadingTerminals: true }
		}

		case EVOTOR_GET_TERMINALS + SUCCESS: {
			return {
				...state,
				loadingTerminals: false,
				terminals: {
					...state.terminals,
					...normalizeForTerminals({ data: payload })
				}
			}
		}

		case EVOTOR_GET_TERMINALS + FAIL: {
			return { ...state, loadingTerminals: null, error }
		}

		case EVOTOR_GET_CASHIERS + REQUEST: {
			return { ...state, loadingCashiers: true }
		}

		case EVOTOR_GET_CASHIERS + SUCCESS: {
			return {
				...state,
				loadingCashiers: false,
				cashiers: {
					...state.cashiers,
					...normalizeForCashiers({ data: payload })
				}
			}
		}

		case EVOTOR_GET_CASHIERS + FAIL: {
			return { ...state, loadingCashiers: null, error }
		}

		default:
			return state
	}
}
