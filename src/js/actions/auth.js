import { API_URL, AUTH_SET, REQUEST, SUCCESS, FAIL, POST_REQUEST } from '~constants'
import { axiosInitialization, requestCreator } from './action-creators'

export function setAuthorization({ token = '', evoToken = '' }) {
	return dispatch => {
		if (!token.length || !evoToken.length)
			dispatch({
				type: AUTH_SET + FAIL,
				error: 'Отсутствует токен авторизации'
			})

		axiosInitialization({ token, evoToken })
		dispatch({
			type: AUTH_SET + SUCCESS,
			payload: { token, evoToken }
		})

		return requestCreator(dispatch, {
			type: 'LOGIN_UPDATE',
			requestUrl: 'https://prechecks.lad24.ru/fiscreg/evotoken',
			requestType: POST_REQUEST,
			sendObject: { evoToken }
		})
	}
}