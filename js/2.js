// TODO: tabs
// TODO: table
// TODO: forms

document.querySelectorAll('.tab').forEach((tab, i) => {
	tab.addEventListener('click', async () => {
		const res = await fetch(`http://localhost:3000/tab?tab=${i + 1}`)
		const data = await res.json()
		document.getElementById('title').innerText = data.title
		document.getElementById('description').innerText = data.description
	})
})
