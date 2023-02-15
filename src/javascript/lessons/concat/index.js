const array1 = [ 'academia', 'livros', 'trabalho', 'viagens', 'filmes' ]
const array2 = [ 'redes sociais', 'dinheiro', 'beba água' ]


// concat
// concat junta dois arrays

// 1 imprima no console a junção do array1 com array2
const array3 = array1.concat(array2)
// console.log(array3)


// 2 crie uma função que receba 2 arrays e retorno um array com os valores que á em ambos
const array = (array1,array2) => {
    return array1.concat(array2)
}
console.log(array([1,2,3,4,5],array2))
