const array1 = ['carro', 'moto', 'bicicleta', 'avião', 'skate']
const array2 = [
  {
    name: 'Maria',
    email: 'maria@email.com'
  },
  {
    name: 'Joana',
    email: 'joana@email.com'
  },
  {
    name: 'Ana',
    email: 'ana@email.com'
  },
  {
    name: 'Katia',
    email: 'katia@email.com'
  },
]

// Find localiza um item em um array

// 1 localize a moto no array 1
const automoveis = array1.find(item => item === 'moto')
// console.log(automoveis)

// 2 localize a pessoa em que o email é maria@email.com
const email = array2.find(item => item.email === 'maria@email.com')
console.log(email)
