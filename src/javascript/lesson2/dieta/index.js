const pessoasJSON = require('../../../assets/data/pessoas/pessoas.json')
const localizarJSON = require('../../../assets/data/pessoas/localizar.json')

const dieta = ['chocolate', 'bolacha', 'pao', 'macarrao', 'arroz']

// 1 - cortar um item da lista
//  dieta.splice(2,1)
//  console.log(die

 // 2- fazer uma funcao recebe uma lista e nome do item e retorna a lista sem o item que foi passado com o nome
 const foods = (list, nome) => {
    const position = list.indexOf(nome)
    if(position > -1){
        list.splice(position, 1)
        // console.log(list)

    } else {
    //    console.log(`O item ${nome} não existe na lista` )
    }
}
// foods(dieta, 'pao')
// foods(dieta, 'pao')

const bichos = 'gato, cachorro, leao, papagaio, cavalo, leopardo, peixe, capivara'

// const bichosArray = bichos.split(',')
// console.log(bichosArray)

// retornar todas as pessoas que tiverem entre 20  e 30 anos
const people = pessoasJSON.filter(item => item.age >= 20  && item.age <= 30).sort((a, b) => a.age - b.age)
const media = people.reduce((total, idade) => {
    const soma = total + idade.age
    return soma
}, 0)
// console.log(media / people.length)

const localizar = pessoasJSON.find(item => item.email === 'deanamoran@ultrimax.com')
// console.log(localizar)

const ordem = (list, email) => {
    return list.find(item => item.email ===  email)
}
// console.log(ordem(pessoasJSON,'deanamoran@ultrimax.com'))

// localizar as pessoas que estao no json localizar
const pessoas = pessoasJSON.filter(item => {
    const pessoas2 = localizarJSON.find(i => item.email === i)
    return pessoas2
})

// console.log(pessoas)

