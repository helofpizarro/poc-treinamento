const json1 = require('../../../assets/data/pessoas/pessoas.json')

// 1 - retorne somente nome e endereço das pessoas do json
const nome = json1.map(item => {
    return {
        name: item.name,
        address: item.address
    }
})
// console.log(nome)

// 2 - retorne uma lista somente com nome, telefone e email das pessoas com isActive true
const list = json1.filter(item => item.isActive === true).map(item => {
    return {
        name: item.name,
        telefone: item.phone,
        isActive: item.isActive
    }
})
// console.log(list)
