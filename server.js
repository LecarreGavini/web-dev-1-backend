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

app.get('/tabs', (req, res) => {
	const tab = req.query.tab
	const data = require('./json/tabs.json')
	res.json({
		title: data[tab].title,
		description: data[tab].description,
	})
})

app.get('/users', (req, res) => {
	const from = +req.query.from
	const size = +req.query.size
	const users = require('./json/users.json')
	res.json({
		users: users.slice(from, from + size),
		count: users.length,
	})
})

app.post('/search', (req, res) => {
	const id = req.body.id
	const usersSearch = require('./json/usersSearch.json')
	const data = usersSearch[id]

	if (data == undefined) {
		res.json({
			success: false,
		})
	} else {
		res.json({
			id: id,
			first: data.first,
			last: data.last,
			age: data.age,
			success: true,
		})
	}
})

app.get('/topics', (req, res) => {
	const tab = req.query.tab
	const topics = require('./json/topics.json')
	const topic = topics[tab]
	res.json(topic)
})

app.listen(port)
