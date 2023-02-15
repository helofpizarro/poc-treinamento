const json1 = require('../../../assets/data/pessoas/pessoas-delete.json')

const email = 'odessasanford@ultrimax.com'

// 1 inclua o email na lista json1
const email1 = json1.includes(email)
// console.log(email1)

// 2 crie uma função que inclua string em uma lista de email
const email2 = (email, array) => {
    return array.includes(email)
}
// console.log(email2('coletteheath@ultrimax.com', json1))