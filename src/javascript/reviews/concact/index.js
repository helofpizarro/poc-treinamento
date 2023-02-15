const json1 = require('../../../assets/data/pessoas/pessoas-delete.json')
const json2 = require('../../../assets/data/pessoas/pessoas-inativas.json')

// crie uma função que retorne a junção de duas listas
const getTogether = (json1,json2) => {
  return json1.concat(json2)
}
// console.log(getTogether(json1,json2))