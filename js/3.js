document.querySelectorAll('.tab').forEach((tab, index) => {
	tab.addEventListener('click', async () => {
		const req = await fetch(`http://127.0.0.1:3000/topics?tab=${index}`)
		const data = await req.json()

		document.getElementById('title').innerText = data.title
		document.getElementById('label').innerText = data.label
		document.getElementById('description').innerText = data.description

		const topicsContainer = document.getElementById('topics')

		const topicsEl = data.topics.map(topic => {
			const element = document.createElement('li')
			element.innerText = topic
			return element
		})

		topicsContainer.innerHTML = ''

		topicsEl.forEach(el => {
			topicsContainer.append(el)
		})
	})
})
