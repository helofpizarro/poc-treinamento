const pessoasJSON = require('../../assets/data/pessoas/pessoas.json')
const localizarJSON = require('../../assets/data/pessoas/localizar.json')

// Listar pessoas maiores de 18 anos

// console.log(idade)
const idade3 = pessoasJSON.filter(item => item.age > 18)
// console.log(idade3)


// Listar pessoas com idade entre 18 e 65 anos

// console.log(idade2)
const idade2 = pessoasJSON.filter(item => item.age >= 18 && item.age <= 65)
// console.log(idade2)


// listar pessoas com cadastro ativo

// console.log(cadastro)
const cadastro = pessoasJSON.filter(item => item.isActive === true)
// console.log(cadastro)
// Listar pessoas com idade entre 18 e 65 anos

// listar pessoas com cadastro ativo de

// Listar o Nome das mulheres

// console.log(nome)
const nome = pessoasJSON.filter(item => item.gender === 'female').map(item => item.name)
// console.log(nome)



// Listar o nome das mulheres maior de 18

// console.log(mulheres)
const mulheres2 = pessoasJSON.filter(item => item.age > 18 && item.gender === 'female').map(item => item.name)
// console.log(mulheres2)


// Listar as frutas Favoritas das crianças

// console.log(child)
const kid = pessoasJSON.filter(item => item.age <= 14).map(item => item.favoriteFruit)
// console.log(kid)



// Order a lista em ordem crescente de idade entre
const idadeCres = pessoasJSON.sort((a, b) => a.age - b.age)
// console.log(idadeCres)


// ordernar a lista em ordem alfabetica
const alpha = pessoasJSON.sort((a,b) => {
    if(a.name > b.name){
        return 1
    }
    if(a.name < b.name){
        return -1
    }
    return 0
})

// console.log(alpha)


// localizar os telefones e endereçoes das pessoas emails que estão no localizar.json
const localizar = localizarJSON.map(item => {
    const pessoa =  pessoasJSON.find(i => i.email === item)
    return {
        name: pessoa.name,
        email: pessoa.email,
        telefone: pessoa.phone
    }
})  

const localizar2 = localizarJSON.map((item) => {
    const pessoa = pessoasJSON.find((i) => i.email === item)
    if(pessoa) {
        const { name, email, phone } = pessoa
        return {
            name,
            email,
            phone
        }
    }
})

console.log(localizar2)

