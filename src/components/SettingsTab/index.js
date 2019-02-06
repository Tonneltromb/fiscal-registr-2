import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import TableSettings from './table-settings'
import TableTerminals from './table-terminals'
import '~css/settings-tab/index.scss'

function SettingsTab({ token }) {
	return (
		<Fragment>
			<TableTerminals />
		</Fragment>
	)
}

export default hot(module)(SettingsTab)
