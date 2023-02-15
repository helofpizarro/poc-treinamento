const array = [1,2,3,4,5]

const remove = (a, n) => {
  const newArray =  a.slice(-n)
   
    return newArray
}

// console.log(remove(array, 2))

const rev = (a, b) => {
    const newRev = a.filter(item => item !== b)
    return newRev
}
console.log(rev([1,2,3,4,5], 3))

const coisas = (array, text) => {
  const element = array.indexOf(text)
  array.splice(element, 1)
  return array
}

console.log(coisas(['mil reais de desconto', 'vaquinha', 'tonizinho'], 'vaquinha'))
