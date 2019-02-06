import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

TablePopup.propTypes = {
	data: PropTypes.object
}

function TablePopup({ data: { products } }) {
	return (
		<table>
			<tbody>
				<tr>
					<th className='name-column'>Наименование</th>
					<th className='price-column'>Цена</th>
					<th className='amount-column'>Количество</th>
					<th className='measure-column'>Ед.измерения</th>
				</tr>
				{products.map(
					({ name, price, priceWithDiscount, count, measureName, measurePrecision }) => (
						<tr key={`product-${name}`}>
							<td className='name-column'>{name}</td>
							<td className='price-column'>{price}</td>
							<td className='amount-column'>{count}</td>
							<td className='measure-column'>{measureName}</td>
						</tr>
					)
				)}
				<tr>
					<td colSpan='4'>Здесь будет выводиться наименование терминала "Терминал ХХХ"</td>
				</tr>
			</tbody>
		</table>
	)
}

export default hot(module)(TablePopup)
