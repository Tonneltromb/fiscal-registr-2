export function copyToBuffer({value}) {
	let tmp = document.createElement('INPUT'),
		focus = document.activeElement
	tmp.value = value
	document.body.appendChild(tmp)
	tmp.select()
	document.execCommand('copy')
	document.body.removeChild(tmp)
	focus.focus()
}
