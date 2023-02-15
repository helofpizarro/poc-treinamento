const array = ['carro', 'casa', 'fazendinha', 'sitio', 'predio', 'moto', 'avião', 'bicicleta', 'patins']

// splice remove intens de um array passando a posição e quantidade

// 1 remova sitio do array acima
// array.splice(3,1)
// console.log(array)

// 2 remova predio e moto do array acima
// array.splice(4,2)
// console.log(array)

// 3 remova  avião e patins do array acima
// array.splice(6,1)
// array.splice(7,1)
// console.log(array)

// 4 crie uma função que receba um array em um item n e remova o item do array
const place = (array,n) => {
   const item = array.indexOf(n)
   if(item >= 0){
      array.splice(item, 1)  
    }
    console.log(array)
}

place(array, 'casa')