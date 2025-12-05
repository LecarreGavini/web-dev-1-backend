document.getElementById('get').addEventListener('click', () => {
	get()
	// Old()
})

const get = async () => {
	const response = await fetch('http://localhost:3000/')
	const text = await response.text()
	console.log(text)
}

const getOld = () => {
	fetch('http://localhost:3000/')
		.then(response => {
			return response.text()
		})
		.then(text => {
			console.log(text)
		})
}

document.getElementById('post').addEventListener('click', async () => {
	const value = document.getElementById('identity').value
	const data = await post(value)
	if (data.success) {
		document.getElementById('error').innerText = ''
		document.getElementById('success').innerText = 'Success'
	} else {
		document.getElementById('success').innerText = ''
		document.getElementById('error').innerText = 'Failed'
	}
	document.getElementById('message').innerText = data.message
})

const post = async identity => {
	const response = await fetch('http://localhost:3000/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			id: identity,
		}),
	})
	const data = await response.json()
	return data
}

document.getElementById('get2').addEventListener('click', async () => {
	const response = await fetch(
		'http://127.0.0.1:3000/department-public-work-highways',
	)
	const data = await response.json()
	document.getElementById(
		'message',
	).innerText = `${data.who} plundered ${data.plundered}`
	document.getElementById('success').innerText = ''
	document.getElementById('error').innerText = ''
})
