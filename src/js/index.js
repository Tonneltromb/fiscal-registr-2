import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { store, history } from './store'
import App from '../components/app'

ReactDOM.render(
	<Provider {...{ store }}>
		<ConnectedRouter {...{ history }}>
			<Switch>
				<Route path="/fiscregsettings/" component={App} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)