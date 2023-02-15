const json1 = require('../../../assets/data/pessoas/pessoas.json')
const json2 = require('../../../assets/data/pessoas/localizar.json')

// 1 - retorne o json2 ordenado em ordem alfabetica
const ordem = json2.sort((a,b) => {
    if(a > b){
        return 1
    }
    if(a < b){
        return -1
    }
    return 0
})
// console.log(ordem)

// 2 - retorne o json1 de ordenado por idade de ordem crescente
const age = json1.sort((a,b) =>  a.age - b.age)
// console.log(age)

// 3 - retorne o json 1 em ordem alfabetica por nome
const nameAlpha = json1.sort((a,b) => {
    if(a.name > b.name){
        return 1
    }
    if(a.name < b.name){
        return -1
    }
    return 0
})
console.log(nameAlpha)