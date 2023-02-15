const json1 = require('../../../assets/data/pessoas/pessoas.json')
const json2 = require('../../../assets/data/pessoas/localizar.json')

// 1 - localize a pessoa em que o email seja coletteheath@ultrimax.com no json1
const email = json1.find(item => item.email === 'coletteheath@ultrimax.com')
// console.log(email)

// 2 - localize a pessoa em que o id seja 626fcb15c5e8f66c40f7d047 no json1
const pessoa = json1.find(item => item.id === '626fcb15c5e8f66c40f7d047')
// console.log(pessoa)

// 3 - localize no json1 as pessoas que estão no json2
const pessoas2 = json1.filter(item => {
    const pessoas3 = json2.find(i => item.email === i)
    return pessoas3
})
// console.log(pessoas2)

// 4 - localize no json1 as pessoas que estão no json2 e remova-as
const pessoas3 = json1.filter(item => {
    const pessoas4 = json2.find(i => item.email !== i)
    return pessoas4
})
console.log(pessoas3)