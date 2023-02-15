const json1 = require('../../../assets/data/pessoas/pessoas.json')

// 1 - retorne as 5 primeiras pessoas do json1
const firstPeople = json1.splice(0,5)
// console.log(firstPeople)

// 2 - crie uma função que retorne um número n de pessoas do json1
const nPeople = (array, a, b) => {
    return array.splice(a, b)
}
// console.log(nPeople(json1, 1,10))
