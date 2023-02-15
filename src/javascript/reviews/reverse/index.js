const json1 = require('../../../assets/data/pessoas/localizar.json')
const json2 = require('../../../assets/data/pessoas/pessoas-inativas.json')

// 1 - retorne a lista json reversa
// const instead = json1.reverse()
// console.log(instead)

// 2 - crie uma função que retorna listas reversas
const instead2 = (array) => {
  return array.reverse()
}
console.log(instead2(json1))
console.log(instead2(json2))
console.log(instead2(["vaquinha", "chatinha", "bb"]))
