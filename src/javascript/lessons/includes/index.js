const array = ['carne', 'banana', 'pasta de amendoin', 'barrinha']

// includes verifica se existe o item no array retorna true ou false


// 1 verifica se existe banana no array acima
 const haveItem = array.includes('banana')
// console.log(haveItem)

// 2 crie uma função que verifica se existe um determinado item na posição x de um array
const check = (array, item, position) => {
  return  array.includes(item,position)
}
console.log(check(array,'banana', 2))