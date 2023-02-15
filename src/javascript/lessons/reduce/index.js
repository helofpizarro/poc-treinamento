const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const array2 = [
  {
    product: 'carne',
    price: 120
  },
  {
    product: 'Café',
    price: 30
  },
  {
    product: 'barrinha',
    price: 14
  },
  {
    product: 'frango',
    price: 100
  }
]

// reduce recebe dois parametros e retorna a soma ou subtração dos mesmos

// 1 retorne a soma de todos os números do array acima
const soma = array.reduce((total, num) => {
  return total + num
}) 
// console.log(soma)

// 2 retorne a soma dos produtos da lista de compras
const compras = array2.reduce((total, num) => {
  return total + num.price
}, 0)
console.log(compras)

