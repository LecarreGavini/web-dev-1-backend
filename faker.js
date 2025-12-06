const first = [
	'Matthew',
	'Mark',
	'Luke',
	'John',
	'Lecarre',
	'Jason',
	'Billy',
	'Sushi',
	'Bobby',
]
const last = [
	'Zamora',
	'Gavini',
	'Sampa',
	'Dill',
	'Argon',
	'Maki',
	'Messi',
	'Alonzo',
]

function rand(max) {
	return Math.floor(Math.random() * max)
}

const names = []

for (let i = 0; i < 100; i++) {
	names.push({
		first: first[rand(first.length)],
		last: last[rand(last.length)],
		age: rand(30) + 1,
	})
}

const namesSearch = {}

for (let i = 0; i < 100; i++) {
	namesSearch[`USC${i + 1}`] = {
		first: first[rand(first.length)],
		last: last[rand(last.length)],
		age: rand(30) + 1,
	}
}

console.log(JSON.stringify(namesSearch))
