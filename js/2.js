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
// TODO: forms
