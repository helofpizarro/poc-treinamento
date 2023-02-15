
const array = [
  {
    id: '1',
    nome: 'Maria Heloisa',
    idade: 28,
    isActive: false
  },
  {
    id: '2',
    nome: 'Mariana Pricila',
    idade: 22,
    isActive: true
  },
  {
    id: '3',
    nome: 'Jeferson Silva',
    idade: 27,
    isActive: true
  },
]


// Map ler os itens de um array e retorna uma nova lista

// 1 retorne todas as pessoas do array com isActive true
const retorna = array.map(item => {
  if(item.isActive){
    return item
  }
})
// console.log(retorna)

// 2 retorne uma lista sem o item com id 2
const list = array.map(item => {
  if(item.id !== '2'){
    return item

  }
})
// console.log(list)


// 3 retorne uma lista com o campo telefone para todos usuários
const telefone = array.map(item => {
  return {
    ...item,
    telefone: ''
  }
})
// console.log(telefone)

// adicione um telefone para a pessoa do id 1
const addTelefone = array.map(item => {
  if(item.id === '1'){
    return{
      ...item,
      telefone: '9999-9999'
    }
  } else {
    return item
  }
})
console.log(addTelefone)
