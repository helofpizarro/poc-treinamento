const pessoas = ['Jeferson', 'Maria Heloisa', 'Juliana', 'Ana', 'Flavia']

// 1- listar em ordem alfabética
const people = pessoas.sort((a, b) => {
    if(a > b){
        return 1
    } 
    if(a < b){
        return -1
    } 
    return 0
})
console.log(people)