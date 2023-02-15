const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// Filter é uma função utilizada para filtrar um array


// 1 imprima no console os números pares do array
const pares = array.filter(item => item % 2 === 0)
console.log(pares)

// 2 imprima no console os números impares do array
const impares = array.filter(item => item % 2 !== 0)
// console.log(impares)

// 3 imprima no console os números maiores que 10
const maiores = array.filter(item => item > 10)
// console.log(maiores)

// 4 imprima no console os números impares menores que 10
const impares1 = array.filter(item => item % 2 === 0 && item > 10)
// console.log(impares1)

// 5 remova o número 10 e imprima no console
const remover = array.filter(item => item !== 10)
// console.log(remover)

// 6 crie uma função que receba o array e remova um numero x
const deleteSome = (array, x) => {
     return array.filter(item => item !== x)
}
// console.log(deleteSome(array, 4))
