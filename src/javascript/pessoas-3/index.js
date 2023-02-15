const pessoas = []

const pessoa = (name, age, id,isActive, gender, email) => {
	pessoas.push({
		name,
		age,
		id,
		isActive,
		gender,
		email,
	})	
}
pessoa('Jeferson', 15, '626fcb1564bdc64fb985e3c5', true, 'male', 'jefersonteste@ultrimax.com')
pessoa('Maria', 15, '626fcb1564bdc64fb985e3c6', true, 'female', 'mariateste@ultrimax.com')

const newPessoa = pessoas.map(item => {
	return {
		...item,
		isCrazy: 'isCrazy2'
	}
}) 

pessoas.unshift({
	name: 'Tony'
})
pessoas.pop()
console.log(pessoas)