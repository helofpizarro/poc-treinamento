const array = ['Maria', 'Heloisa']

// join junta os items de um array
const name = array.join('-')
// console.log(name)

// 1 retorne o nome 'Maria Heloisa' do array acima
const name1 = array.join(' ')
// console.log(name1)

// 2 crie uma função que retorne os items de um array juntos
const together = (array) => {
    return array.join(' ')
}
// console.log(together(array))
