document.querySelectorAll('.tab2').forEach((tab, index) => {
	tab.addEventListener('click', async () => {
		const req = await fetch(`http://127.0.0.1:3000/topics?tab=${index}`)
		const data = await req.json()

		document.getElementById('title2').innerText = data.title
		document.getElementById('label2').innerText = data.label
		document.getElementById('description2').innerText = data.description

		const topicsContainer = document.getElementById('topics2')

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
