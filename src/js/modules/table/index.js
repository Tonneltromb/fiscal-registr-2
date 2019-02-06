import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TableLine from './tableLine'
import Pagination from './pagination'
import './index.scss'

class Table extends Component {
	static propTypes = {
		prechecks: PropTypes.array.isRequired,
	};

	state = {
		page: 1,
		pageSize: 10
	};

	defineColumns = () => {
		return [
			{label: '№', className: 'number-column', field: ''},
			{label: 'Код операции', className: 'code-column', field: 'code'},
			{label: 'Тип документа', className: 'document-column', field: 'documentType'},
			{
				label: 'Сумма',
				className: 'amount-column',
				field: 'amount',
				fieldFormat: amount => `${amount.toFixed(2)} ₽`
			},
			{
				label: 'Дата',
				className: 'date-column',
				field: 'dt'
			},
			{
				label: 'Статус',
				className: 'status-column',
				field: 'status',
				fieldFormat: status => {
					let className, label;
					switch (status) {
						case 'created': {
							label = 'Создан';
							className = 'orange';
							break
						}
						case 'payed': {
							label = 'Оплачен';
							className = 'green';
							break
						}
						case 'deleted': {
							label = 'Удалён';
							className = 'red';
							break
						}

						default: {
							label = '';
							className = 'unknown';
							break
						}
					}
					return <operation-status class={className}>{label}</operation-status>
				}
			}
		];
	};

	render() {
		const totalPages = Math.ceil(this.props.allPrechecksCount / this.state.pageSize);
		return (
			<div className="Table">
                    <Pagination
                            changeActivePage = {this.changeActivePage}
                            changePageSize = {this.changePageSize}
                            totalPages = {totalPages}
                            pageSize = {this.state.pageSize}
                            page = {this.state.page}
					/>
				<table>
					<tbody>
						{this.getTableHeader(this.defineColumns())}
						{this.getTableBody( this.state.page, this.state.pageSize, this.defineColumns())}
					</tbody>
				</table>
			</div>
		)
	}

	getTableHeader = (columns) => (
		<tr className="table-header">
			{columns.map(({ className, label }, index) => (
				<th key={`th-${index}`} className={className}>
					{label}
				</th>
			))}
		</tr>
	);

	getTableBody = (page, pageSize, columns) => {
		const { data: { data, list }, TablePopup } = this.props;
		const table = [];
		for (let i = pageSize * (page - 1); i < page * pageSize && i < list.length; i++) {
			table.push(
				<TableLine
					{...{ lineIndex: i + 1, data: data[list[i]], columns, TablePopup }}
					key={`line-${i}`}
				/>
			)
		}
		return table
	};

	changeActivePage = ({ page }) => {
		this.setState({ page })
	};

	changePageSize = ({ pageSize }) => {
		this.setState({ pageSize })
	}
}

export default Table
