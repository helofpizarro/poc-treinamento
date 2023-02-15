const array = [
  {
    name: ['Maria', 'Heloisa']
  },
  {
    name: ['Julio', 'Cezar']
  },
  {
    name: ['Ana', 'Carolina']
  },
  {
    name: ['Mariana', 'Pricila']
  },
  {
    name: ['Hellen', 'Miranda']
  }
]

// retorne o nome e sobrenome na mesma string ex: 'Maria Heloisa'
const name = array.map(item => item.name.join(' '))
// console.log(name)