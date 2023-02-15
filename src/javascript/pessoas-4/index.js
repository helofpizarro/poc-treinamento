const helo = {
    name: 'Maria Heloisa',
    idade: 28,
    cabelo: 'loiro',
    caracteristica: 'chatona'
}

helo.endereco = {
    cidade: 'Barueri',
    bairro: 'Alphaville',
    rua: 'Al Itapecuru'
}
helo.gatos = [
    'tony',
    'stevens',
    'margot'
]

helo.gatos = helo.gatos.map(item => {
   if(item === 'margot'){
     return item.replace('margot','helo')
       
   } else {
       return item
   }
})
// console.log(helo.gatos)