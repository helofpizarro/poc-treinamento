const pessoasJSON = require('../../assets/data/pessoas/pessoas.json')
const pessoasInativas = require('../../assets/data/pessoas/pessoas-inativas.json')
const pessoasPremium = require('../../assets/data/pessoas/pessoas-premium.json')
const pessoasDelet = require('../../assets/data/pessoas/pessoas-delete.json')

// ====================== revisão ========================

  // Listar os nomes dos adultos e suas frutas favoritas
  const frutas = pessoasJSON.filter(item => item.age >= 18).map(item => {
    return {
      name: item.name,
      fruit: item.favoriteFruit

    }
  })
  // console.log(frutas)

  // Listar os nomes dos idosos e as boas vindas
  const idosos = pessoasJSON.filter(item => item.age >= 60).map(item => {
    return {
      name: item.name,
      vindas: item.greeting
    }
  })
  // console.log(idosos)

  // Encontrar pessoas de 20 anos de idade e listar nome e sobre elas
  const maiores = pessoasJSON.filter(item => item.age === 20).map(item => ({
      name: item.name,
      about: item.about
  })
  )
  // console.log(maiores)

  // Encontrar criancas e listar o endereços delas
  const children = pessoasJSON.filter(item => item.age <= 15).map(item => item.address)
  // console.log(children)


// ====================== new ========================

  // Localizar as pessoas do json pessoas-inativas e mudar o status delas para inativos
  const pessoas = pessoasJSON.map(item => {
    const pessoaInativa =  pessoasInativas.find(i => i === item.id)
    if(pessoaInativa){
      return {
        ...item,
        isActive: false
      }
    } else {
      return item
    }
  })
  // console.log(pessoas)
  const edit = pessoasJSON.map(item => {
    const email = pessoasInativas.find(i => i === item.id)
    if(email){
      return {
        ...item,
        status: 'ausente'
      }
    } else {
      return {
        ...item,
        status: 'disponivel'
      }
    }
  })
  // console.log(edit)
  

  // Localizar as pessoas do json pessoas-premium e adicionar um status de premium
  const premium = pessoasJSON.map(item => {
    const pessoas = pessoasPremium.find(i => i === item.email)
    if(pessoas || item.age <= 14){
      return {
        ...item,
        premium: true
      }
    } else {
      return {
        ...item,
        premium: false

      }
    } 
  })
  // console.log(premium)
  

  // Localizar as pessoas do json pessoas-delete e remover da lista 
 
    const delet = pessoasJSON.filter(item => {
      const pessoa = pessoasDelet.find(i => item.email === i)
      return pessoa !== item.email
    })
    // console.log(delet)
   

  // Localizar as pessoas do json-premium e remover as com cadastros inativos 
  const premium1 = pessoasJSON.filter(item => {
    const pessoa = pessoasPremium.find(i => item.email === i && item.isActive === false)
    return pessoa !== item.email
  })
  // console.log(premium1)

  // remover todas as pessoas inativas
  const inativas = pessoasJSON.filter(item => item.isActive !== false)
  // console.log(inativas)
    


  // Listar mulheres e homens em listas distintas e orndar por idade
  const mulheres = pessoasJSON.filter(item => item.gender === 'female').sort((a,b) => a.age - b.age)
  // console.log(mulheres)

  const homens = pessoasJSON.filter(item => item.gender === 'male').sort((a,b) => a.age - b.age)
  // console.log(homens)
