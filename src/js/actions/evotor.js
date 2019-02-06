import { requestCreator } from './action-creators'
import {
	EVOTOR_API_URL,
	GET_REQUEST,
	POST_REQUEST,
	EVOTOR_GET_SHOPS,
	EVOTOR_GET_TERMINALS,
	EVOTOR_GET_CASHIERS
} from '~constants'

export function evotorGetShops() {
	return (dispatch, getState) =>
		requestCreator(dispatch, {
			type: EVOTOR_GET_SHOPS,
			requestUrl: `${EVOTOR_API_URL}/stores/search`,
			requestType: GET_REQUEST,
			headers: { 'X-Authorization': getState().auth.evoToken },
			resultField: 'data'
		})
}

export function evotorGetTerminals() {
	return (dispatch, getState) =>
		requestCreator(dispatch, {
			type: EVOTOR_GET_TERMINALS,
			requestUrl: `${EVOTOR_API_URL}/devices/search`,
			requestType: GET_REQUEST,
			headers: { 'X-Authorization': getState().auth.evoToken },
			resultField: 'data'
		})
}

export function evotorGetCashiers() {
	return (dispatch, getState) =>
		requestCreator(dispatch, {
			type: EVOTOR_GET_CASHIERS,
			requestUrl: `${EVOTOR_API_URL}/employees/search`,
			requestType: GET_REQUEST,
			headers: { 'X-Authorization': getState().auth.evoToken },
			resultField: 'data'
		})
}
