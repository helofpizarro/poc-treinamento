const array = [ 1, 2, 3, 4, 5, 6, 7]
const array2 = ['Ellen', 'Julia', 'Carlos', 'Mariana', 'Luciana']
const array3 = [
  {
    name: 'Ellen',
    idade: 27
  },
  {
    name: 'Julia',
    idade: 22
  },
  {
    name: 'Carlos',
    idade: 36
  },
  {
    name: 'Mariana',
    idade: 18
  },
  {
    name: 'Luciana',
    idade: 28
  },
]

// Sorte ordena uma lista

// 1 ordene a lista array do maior para o menor e do menor para o maior 
const number = array.sort((a, b) => b - a)
// console.log(number)

const number2 = array.sort((a, b) => a - b)
// console.log(number2)

// 2 ordne a lista array2 em ordem alfabetica
const listArray = array2.sort()
// console.log(listArray)

// 3 ordene a lista array3 por idade do menor para o maior
const name = array3.sort((a, b) => a.idade - b.idade)
// console.log(name)


// 4 ordene a liste array3 por ordem alfabetica de nome
const name2 = array3.sort((a, b) =>  {
  if(a.name > b.name){
    return 1
  }
  if(a.name < b.name){
    return -1
  }
  return 0
})
console.log(name2)


