import { requestCreator } from './action-creators'
import { API_URL, GET_REQUEST, POST_REQUEST, PRECHEK_GET_LIST } from '~constants'

export function precheckGetList(size) {
	return (dispatch, getState) =>
		requestCreator(dispatch, {
			type: PRECHEK_GET_LIST,
			requestUrl: `${API_URL}/precheck/list?size=${size}`,
			requestType: GET_REQUEST,
			resultField: 'data'
		})
}
