import React, {useEffect, useState} from 'react'

import { Section, Card, ButtonAdd, CartContent, CardIntem, ButtonBay, Input, Select } from './style'

import data from './assets/data/shoes-data'

function floatToCurrency (floatNumber: number) {
  return floatNumber.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

type CardProps = {
  id: number
  image: ImageProps
  price: number
  description: string
  qtd: number
  title: string
}

type ImageProps = {
  url: string
  alt: string
}

const getTotal = (array: CardProps[]) => {
   const total = array.reduce((acumulator, value) => {
      return acumulator + (value.price * value.qtd)
    }, 0)
    return total
}

const Market = () => {
    const [card, setCard] = useState<CardProps[]>([])
    const [search, setSearch] = useState('')
    const [list, setList] = useState<CardProps[]>(data)
    const [select, setSelect] = useState('')
    const [min, setMin] = useState('')
    const [ max, setMax] = useState('')

    const handleAdd = (item: CardProps) => {
      const newAdd = card.find(shoes => shoes.id === item.id)
      if(newAdd){
        const newList = card.map(item => {
           if(item.id === newAdd.id){
            return {
              ...item,
               qtd: item.qtd + 1,
            }

           } else {
              return item
           }
        })
        setCard(newList)
      } else {
        setCard([...card,{...item, qtd: 1}])
      }
    }

    const handleRemove = (id:number) => {
       const newAdd = card.find(item => item.id === id)
       if(newAdd && newAdd.qtd > 1){
          const newList = card.map(item => {
            if(item.id === id){
              return {
                ...item,
                 qtd: item.qtd - 1,
              }

             } else {
                return item
             }
          })
          setCard(newList)
       } else {
          const newList = card.filter(item => item.id !== id)
          setCard(newList)
       }
    }

    useEffect(() => {
       if(min !== '' && max === ''){
          const newList = data.filter(item => item.price >= parseInt(min))
          setList(newList)
       }
       if(max !== '' && min === ''){
         const newList = data.filter(item => item.price <= parseInt(max))
         setList(newList)
       }
       if(max === '' && min === ''){
        setList(data)
       }
       if(min !== '' && max !== ''){
        const newList = data.filter(item =>  item.price >= parseInt(min) && item.price <= parseInt(max))
        setList(newList)
       }
    }, [min, max])

    useEffect(() => {
      if(select === 'caro'){
        const newList = data.sort((a, b) => b.price - a.price)
        setList(newList)
        setSelect('')
       }
       if(select === 'barato'){
          const newList = data.sort((a, b) => a.price - b.price)
          setList(newList)
          setSelect('')
       }
    }, [select])

    useEffect(() => {
      const newList = data.filter(item =>  item.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0)
      setList(newList)

    }, [ search ])

  return (
    <Section className='py-5'>
      <div className='container'>
        <h1>Helo Shoes</h1>
        <div className='row d-flex align-items-between'>
          <div className='col-12 col-md-9'>
          <div className='row'>
              <div className='col-12 col-md-8'>
                <Input type='text' placeholder='Digite sua busca' onChange={(event) => setSearch(event.target.value)}/>
              </div>
              <div className='col-12 col-md-4'>
                <Select onChange={(event) => setSelect(event.target.value)}>
                  <option value=''>Todos</option>
                  <option value='caro'>Maior preço</option>
                  <option value='barato'>Menor preço</option>
                </Select>
              </div>
              <div className='col-12 mt-4'>
                <div className='row d-flex align-items-center'>
                  <div className='col-5'>
                    <Input type='text' placeholder='Digite o valor minimo' onChange={(event) => setMin(event.target.value)}/>
                  </div>
                  <div className='col-1'>
                    <h4>até</h4>
                  </div>
                  <div className='col-5'>
                    <Input type='text' placeholder='Digite o valor máximo' onChange={(event) => setMax(event.target.value)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
                    {
                      list.map(item =>  (
                          <div className='col-12 col-md-4'>
                          <Card>
                            <h2 className='title'>{item.title}</h2>
                            <div className='image-content'>
                              <img className='image' src={item.image.url} alt={item.image.alt} />
                            </div>
                            <span className='price'>R$ {item.price}</span>
                            <div className='text-left'>
                              <p className='description'>{item.description}</p>
                            </div>
                            <ButtonAdd onClick={() => handleAdd(item)}>
                              Add to cart
                            </ButtonAdd>
                          </Card>
                        </div>
                       ))
                    }
            </div>
          </div>

          <div className='col-12 col-md-3'>
            <CartContent>
              <span className='cart-title'>
                Cart
              </span>
              <div className='p-2 content'>
                {
                  card.map(item => (
                    <CardIntem>
                      <div className='row'>
                        <div className='col-8'>
                          <div className='d-flex'>
                            <img className='image' src={item.image.url} alt={item.image.url} />
                            <div>
                              <span className='title'>{item.title}</span>
                              <span className='price'>{item.price}</span>
                            </div>
                          </div>
                        </div>

                        <div className='col-4'>
                          <span className='qtd'>qtd</span>
                          <div className='d-flex align-items-center justify-content-between'>
                            <button className='button-qtd' onClick={() => handleRemove(item.id)}>-</button>
                            <span className='number-qtd'>{item.qtd}</span>
                            <button className='button-qtd' onClick={() =>  handleAdd(item)}>+</button>
                          </div>
                        </div>
                      </div>
                    </CardIntem>
                  ))
                }
              </div>
              <div className='p-2'>
                <span>Total: {floatToCurrency(getTotal(card))} </span>

                <ButtonBay>
                  Finalizar
                </ButtonBay>
                </div>
            </CartContent>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Market
