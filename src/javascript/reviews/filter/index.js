const json1 = require('../../../assets/data/pessoas/pessoas.json')


// retorne todas a mulheres da lista
const woman = json1.filter(item => item.gender === 'female')
// console.log(woman)

// retorne um lista sem crianças
const children = json1.filter(item => item.age > 10)
// console.log(children)

// retorne as frutas favoritas dos homens
const fruits = json1.filter(item => item.gender === 'male').map(item => item.favoriteFruit)
// console.log(fruits)

const jobs = [
  {
    area: 'tecnologia',
    title: 'dev2'
  },
  {
    area: 'marketing',
    title: 'analista'
  },
  {
    area: 'tecnologia',
    title: 'dev1'
  },

  {
    area: 'marketing',
    title: 'analista2'
  },
  {
    area: 'rh',
    title: 'ler curriculo'
  },
  {
    area: 'financeiro',
    title: 'contar dinheiro'
  },
  {
    area: 'comercial',
    title: 'vender'
  },
  {
    area: 'ux',
    title: 'design'
  },
  {
    area: 'marketing',
    title: 'mentir'
  },
  {
    area: 'tecnologia',
    title: 'senior'
  },
]

const categoria = jobs.map(job => job.area)
const area = categoria.filter((item, pos) => categoria.indexOf(item) === pos)
console.log(area)

  const obj = {}

 area.map(item => {
  return obj[item] = jobs.filter(job => job.area === item).map(i => i.title)
})



console.log(obj)
