const json1 = require('../../../assets/data/pessoas/pessoas.json')

// 1 - retorne a soma da idade de todas as pessoas da lista
const pessoasList = json1.reduce((total, num) => {
    return total + num.age
}, 0)
// console.log(pessoasList)

// 2 - retorne a media da idade das pessoas da lista
const media = json1.reduce((total, num) => {
    const all =  total + num.age 
    return all / json1.length
   
}, 0)
// console.log(parseFloat(media).toFixed(2))