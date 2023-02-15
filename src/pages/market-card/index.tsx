import React, {useState} from 'react'


type ListProps = {
  name: string
  price: string
  quantidade: number
  id: number
}
function countTotal(array: ListProps[]){
  return array.reduce((ac, item) => {
    return ac + (item.quantidade * Number(item.price))
  }, 0)
}

const MarketCard = () => {
  const [list, setList] = useState<ListProps[]>([])
  const [produt, setProduct] = useState('')
  const [price, setPrice] = useState('')


  const handleAdd = () => {
    const obj = {
      name: produt,
      price: price,
      quantidade: 1,
      id: list.length + 1
    }
    setList([...list, obj])
    setProduct('')
    setPrice('')
  }

  const handleUp = (id: number) => {
    const newList = list.map(item => {
       if(id === item.id){
         return {
           ...item,
           quantidade: item.quantidade + 1
         }
       }  else {
          return item
       }
    })
    setList(newList)

  }

  const handleDown = (id: number) => {
    const newList = list.map(item => {
      if(id === item.id){
        return {
          ...item,
          quantidade: item.quantidade - 1
        }
      }  else {
         return item
      }
   })
   setList(newList)


  }

  const handleDelete = (id: number) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <input type='text' placeholder='Nome do produto' onChange={(event) => setProduct(event.target.value)} value={produt}/>
            <input type='text' placeholder='Preço' onChange={(event) => setPrice(event.target.value)} value={price}/>
            <button onClick={() => handleAdd()}>Adicionar</button>
          </div>
          <div className='col-12'>
            {
              list.map(item => (
              <div className='row'>
                <div className='col-8'>
                <p>Nome: {item.name}</p>

                <p>Preço: {item.price}</p>

                </div>
                <div className='col-4'>
                  <button onClick={() => handleUp(item.id)}>+</button>
                  <span className='mx-3'>{item.quantidade}</span>
                  {
                    item.quantidade > 1 ? (
                      <button onClick={() => handleDown(item.id)}>-</button>

                    ) : (
                      <button onClick={() => handleDelete(item.id)}>Deletar</button>
                    )
                  }
                </div>
              </div>
              ))
            }
          </div>
          <div className='col-12'>
            <span>Total: {countTotal(list)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketCard
