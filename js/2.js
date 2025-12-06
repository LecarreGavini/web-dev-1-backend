// TODO: tabs
document.querySelectorAll('.tab').forEach((tab, index) => {
	tab.addEventListener('click', async () => {
		const res = await fetch(`http://localhost:3000/tabs?tab=${index}`)
		const data = await res.json()
		document.getElementById('title').innerText = data.title
		document.getElementById('description').innerText = data.description
	})
})

// TODO: table
const pagination = {
	from: 0,
	size: 5,
	count: 0,
}

async function users() {
	from = pagination.from
	size = pagination.size

	const res = await fetch(
		`http://localhost:3000/users?from=${from}&size=${size}`,
	)
	const data = await res.json()

	pagination.count = data.count

	const table = document.getElementById('users')

	document
		.getElementById('users')
		.querySelectorAll('tr:not(.header)')
		.forEach(row => {
			row.remove()
		})

	data.users.forEach(user => {
		const row = document.createElement('tr')

		const first = document.createElement('td')
		const last = document.createElement('td')
		const age = document.createElement('td')

		first.classList.add('px-4', 'py-2')
		last.classList.add('px-4', 'py-2')
		age.classList.add('px-4', 'py-2')

		first.innerHTML = user.first
		last.innerHTML = user.last
		age.innerHTML = user.age

		row.appendChild(first)
		row.appendChild(last)
		row.appendChild(age)

		table.appendChild(row)
	})
}

users()

document.getElementById('previous').addEventListener('click', () => {
	if (pagination.from <= 0) return
	pagination.from = pagination.from - pagination.size
	users()
})

document.getElementById('next').addEventListener('click', () => {
	if (pagination.from + pagination.size >= pagination.count) return
	pagination.from = pagination.from + pagination.size
	users()
})

// TODO: forms
