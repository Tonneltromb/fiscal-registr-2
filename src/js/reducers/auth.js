import { AUTH_SET, REQUEST, SUCCESS, FAIL } from '~constants'

const initialState = {
	loadingToken: null,
	token: '',
	evoToken: '',
	error: ''
}

export default (state = initialState, { type, payload = {} }) => {
	const { token, evoToken, error } = payload

	switch (type) {
		case AUTH_SET + SUCCESS: {
			return { ...state, loadingToken: false, token, evoToken, error: '' }
		}

		case AUTH_SET + FAIL: {
			return { ...state, loadingToken: null, token: '', evoToken: '', error }
		}

		default: {
			return state
		}
	}
}
