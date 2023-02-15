const array = ['cachorro', 'gato', 'cavalo', 'galinha', 'vaquinha', 'bode']

// slice corta um array

// 1 retorne uma lista somente com galinha, vaquinha e bode
const list = array.slice(3)
// console.log(list)

// 2 retorne uma lista somente com cachorro e gato
const animais1 = array.slice(0,2)
// console.log(animais)

// 3 crie uma função que retorne a a quantidade n de items do primeiro para o último
const animais = (array, n) => {
    return array.slice(0,n)
}
// console.log(animais(array,2))

// 4 crie uma função que retorne a a quantidade n de items do último para o primeiro
const firsLast = (array,x) => {
    return array.slice(-x)
}
console.log(firsLast(array, 2))
