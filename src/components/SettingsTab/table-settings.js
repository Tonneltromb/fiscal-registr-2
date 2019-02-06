import React from 'react'
import { hot } from 'react-hot-loader'
import { copyToBuffer } from '~utils/other'

function TableSettings({ token }) {
	const handleClickCopyButton = event => {
		const { value } = event.target.parentNode.parentNode.querySelectorAll('.field-for-key')[0]
		copyToBuffer({ value })
	}

	return (
		<table-setting>
			<table-row>
				<table-column>
					<p>
						Обработка для Вашей версии 1С с управляемыми формами. Бухгалтерия предприятия 3.0,
						Управление торговлей 11, Розница 2, Комплексная автоматизация 2, Управление нашей фирмой
						1.6
					</p>
				</table-column>
				<table-column>
					<a
						target="_blank"
						href="http://165104.selcdn.ru/static/fiscreg/ЛАД.Фискальный регистратор.1.7.0.epf"
					>
						Скачать
					</a>
				</table-column>
			</table-row>

			<table-row>
				<table-column>
					<p>
						Обработка для Вашей версии 1С с обычными формами. Бухгалтерия предприятия 2.0,
						Управление торговлей 10.3, Комплексная автоматизация 1.1
					</p>
				</table-column>
				<table-column>
					<a
						target="_blank"
						href="http://165104.selcdn.ru/static/fiscreg/ЛАД.ФискальныйРегистраторОбычныеФормы 1.7.0.epf"
					>
						Скачать
					</a>
				</table-column>
			</table-row>

			<table-row>
				<table-column>
					<p>Модуль для Галактики</p>
				</table-column>
				<table-column>
					<a target="_blank" href="https://vk.com/kkt365">
						Подать заявку
					</a>
				</table-column>
			</table-row>

			<table-row>
				<table-column>
					<span>Ключ доступа:</span>
					<input className="field-for-key" value={token} onChange={() => ({})} />
				</table-column>
				<table-column>
					<button onClick={handleClickCopyButton}>Скопировать</button>
				</table-column>
			</table-row>

			<table-row>
				<table-column>
					<p>Как это работает?</p>
				</table-column>
				<table-column>
					<a
						target="_blank"
						href="https://docs.google.com/document/d/1KZlaIaErBOu6lAH26LSVFp_BTv7f3bwaHmyHQncDWWo/edit?usp=sharing"
					>
						Инструкция
					</a>
				</table-column>
			</table-row>
		</table-setting>
	)
}

export default hot(module)(TableSettings)
