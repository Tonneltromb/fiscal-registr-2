import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { bindActionCreators } from 'redux'
import * as authActions from '~actions/auth.js'
import * as evotorActions from '~actions/evotor'
import Switches from '~modules/switches'
import SettingsTab from './SettingsTab'
import ChecksTab from './ChecksTab/ChecksTab'
import '~css/index.scss'

class App extends Component {
	static propTypes = {
		location: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired,
		setAuthorization: PropTypes.func,
		evotorGetShops: PropTypes.func,
		evotorGetTerminals: PropTypes.func,
		evotorGetCashiers: PropTypes.func
	}

	render() {
		const { loadingToken, token } = this.props.auth
		if (loadingToken !== false || token === '') return <h1>&quot;Token&quot; не был передан</h1>

		const data = [
			{
				title: 'Чеки',
				content: <ChecksTab />,
				className: 'checks-tab'
			},
			{
				title: 'Настройки',
				content: <SettingsTab {...{ token }} />,
				className: 'settings-tab'
			}
		]

		return <Switches {...{ data }} />
	}

	componentDidMount() {
		const { evotorGetShops, evotorGetTerminals } = this.props
		this.authorization()
		evotorGetShops()
		evotorGetTerminals()
	}

	authorization = () => {
		const tokens = this.props.location.search.substring(1).split('&')
		let token, evoToken
		tokens.map(el => {
			if (el.match('token')) token = el.slice('token='.length)
			else if (el.match('evoToken')) evoToken = el.slice('evoToken='.length)
		})
		this.props.setAuthorization({ token, evoToken })
	}
}

const mapStateToProps = ({ auth, routing }) => ({ auth, location: routing.location })
const mapDispatchToProps = dispatch =>
	bindActionCreators({ ...authActions, ...evotorActions }, dispatch)

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App))
