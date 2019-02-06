import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { dateToDMY } from '~utils/date'
import get from 'lodash/get'

function TableTerminals({ evotor }) {
	if (evotor.loadingShops !== false || evotor.loadingTerminals !== false) return <div />
	const { shops, terminals } = evotor
	return (
		<Fragment>
			{shops.list.map(shopId => {
				if (!terminals.list.length) return <p>Нет данных</p>
				if (typeof get(terminals, `data[${shopId}].list`) !== 'undefined')
					return (
						<table key={`shop-${shopId}`}>
							<tbody>
								<tr>
									<th>Магазин</th>
									<th>Терминал</th>
									<th>Ключа терминала</th>
								</tr>
								{terminals.data[shopId].list.map(terminalId => {
									const { name, uuid } = terminals.data[shopId].data[terminalId]
									return (
										<tr key={`terminal-${terminalId}`}>
											<td>{shops.data[shopId].name}</td>
											<td>{name}</td>
											<td>{uuid}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					)
			})}
		</Fragment>
	)
}

const mapStateToProps = ({ evotor }) => ({ evotor })

export default hot(module)(connect(mapStateToProps)(TableTerminals))
