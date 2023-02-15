

const buy = [
    {
        name: 'jordan',
        value: 1000
    },
    {
        name: 'iphone 13',
        value: 7000
    },
    {
        name: 'tifany',
        value: 2500
    },
    {
        name: 'chanel',
        value: 20000
    },
    {
        name: 'ipad',
        value: 5500
    },
    {
        name: 'macbook pro',
        value: 60000
    }
]

// 1 - retornar o valor total
const total = buy.reduce((total, price) => {
   return total + price.value 
}, 0)
console.log(total)

