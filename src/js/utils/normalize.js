import { normalize, schema } from 'normalizr'
// import omit from 'lodash/omit'

export function normalizeEntity({ data, entities, key = 'id' }) {
	const entity = new schema.Entity(entities, {}, { idAttribute: key })
	const mySchema = { [entities]: [entity] }
	const res = normalize({ [entities]: data }, mySchema)
	return { data: res.entities[entities], list: res.result[entities] }
}

export function normalizeForTerminals({ data }) {
	const result = { list: [], data: {} }

	//инициализация
	data.forEach(({ storeUuid }) => {
		result.data[storeUuid] = { data: {}, list: [] }
	})

	data.forEach(el => {
		const { storeUuid, uuid } = el
		if (!!result.list.findIndex(e => e === storeUuid)) result.list.push(storeUuid)
		result.data[storeUuid].list.push(uuid)
		result.data[storeUuid].data[uuid] = el
	})

	return result
}

export function normalizeForCashiers({ data }) {
	const result = {
		shopsList: [], //какие есть магазины
		cashiersList: {}, //какие кассиры привязаны к магазину
		cashiers: {} //данные каждого кассира
	}

	//инициализация
	data.forEach(({ stores, uuid }) => {
		stores.forEach(storeUuid => {
			if (!!result.shopsList.findIndex(e => e === storeUuid)) result.shopsList.push(storeUuid)
			result.cashiersList[storeUuid] = []
		})
	})

	data.forEach(el => {
		const { stores, uuid } = el
		stores.forEach(storeUuid => {
			result.cashiersList[storeUuid].push(uuid)
			result.cashiers[uuid] = el
		})
	})

	return result
}
