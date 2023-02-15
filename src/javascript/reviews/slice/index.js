const json1 = require('../../../assets/data/pessoas/localizar.json')

// 1 - retorne os 3 ultimos items da lista
const last3 = json1.slice(0,3)
// console.log(last3)

// 2 - crie uma função que retorne o numero n de itens de uma lista
const lastNumber = (array,num) => {
    return array.slice(0,num)
}
// console.log(lastNumber(json1,3))

const lastName = (array,num) => {
    return array.slice(-num)
}
// console.log(lastName(json1, 3))