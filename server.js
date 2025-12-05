const express = require('express')
const cors = require('cors') // * new

const app = express()
const port = 3000

app.use(cors()) // * new
app.use(express.json()) // * new

app.get('/', (request, response) => {
	console.log('getting')
	response.json({
		name: 'Lecarre',
		age: 21,
		description: 'faculty',
	})
})

app.post('/', (request, response) => {
	console.log(request.body)
	const data = request.body
	response.json({
		success: data.id == 1 ? true : false,
		message:
			data.id == 1
				? 'Your information has been saved to the database'
				: 'Your information has not been saved to the database',
	})
})

app.get('/department-public-work-highways', (request, response) => {
	console.log('getting')
	response.json({
		plundered: 700000000,
		who: ['JR', 'Mark', 'AJ', 'Christian', 'Kat'],
	})
})

app.get('/tab', (request, response) => {
	const tab = request.query.tab
	const data = {
		1: {
			title: 'Dogs',
			description: 'I have a dog rabba :)',
		},
		2: {
			title: 'Cats',
			description: 'Do you have a cat?',
		},
		3: {
			title: 'Snails',
			description: 'They are so slow tho...',
		},
	}
	response.json(data[tab])
})

app.listen(port)
