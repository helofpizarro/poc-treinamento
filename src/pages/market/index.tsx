import React, { useState, useEffect } from 'react'

import { Section, Card, ButtonAdd, CartContent, CardIntem, ButtonBay } from './style'

import data from './assets/data/shoes-data'

import img from './assets/images/shoes-1.png'


function floatToCurrency (floatNumber: number) {
  return floatNumber.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

type ItemProps = {
  title: string
  price: number
  description: string
  image: ImageProps
  id: number
  qtd: number
}

type ImageProps = {
  url: string
  alt: string
}


const Market = () => {
  const [ card, setCard ] = useState<ItemProps[]>([])
  const [ itemQtd, setItemQtd ] = useState(0)
  const [ amount, setAmount] = useState(0)

  const handleAdd = (item: ItemProps) => {
    const hasItem = card.find((shoes: ItemProps )=> shoes.id === item.id)

    if(hasItem){
      const newList = card.map((shoes: ItemProps) => {
        if(hasItem.id === shoes.id){
          return {
            ...shoes,
            qtd: shoes.qtd + 1
          }
        }
        return shoes

      })

      return setCard(newList)
    }
    const newItem = {...item, qtd: 1}
    return setCard([...card, newItem])
  }

  const handleChangeQtd = (shoes: ItemProps, action: string) => {
      const newList = card.map(item => {
        if(shoes.id === item.id) {
          switch (action) {
            case 'add':
              return {
                ...item,
                qtd: item.qtd + 1
              }
            case 'del':
              return {
                ...item,
                qtd: item.qtd - 1
              }
            default:
              return item
          }
        }
        return item
      })
      setItemQtd(itemQtd + 1)

      return setCard(newList)

  }


  useEffect(() => {
      const newList = card.filter(item => item.qtd > 0)
      setCard(newList)
  }, [itemQtd])


  useEffect(() => {
     const amountItems = card.map(item => item.price * item.qtd)
     if(amountItems.length > 0){
       const totalAmount = amountItems.reduce((a,b) =>  a + b)

       setAmount(totalAmount)
     }
  }, [card])





  return (
    <Section className='py-5'>
      <div className='container'>
        <h1>Helo Shoes</h1>
        <div className='row d-flex align-items-between'>
          <div className='col-12 col-md-9'>
            <div className='row'>
              {
                data.map(item => (
                  <div className='col-12 col-md-4'>
                    <Card>
                      <h2 className='title'>{item.title}</h2>
                      <div className='image-content'>
                        <img className='image' src={item.image.url} alt='shoes - 1' />
                      </div>
                      <span className='price'>R$ {floatToCurrency(item.price)}</span>
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
                            <img className='image' src={item.image.url} alt={item.image.alt} />
                            <div>
                              <span className='title'>{item.title}</span>
                              <span className='price'>{item.price}</span>
                            </div>
                          </div>
                        </div>

                        <div className='col-4'>
                          <span className='qtd'>qtd</span>
                          <div className='d-flex align-items-center justify-content-between'>
                            <button className='button-qtd' onClick={() => handleChangeQtd(item, 'del')}>-</button>
                            <span className='number-qtd'>{item.qtd}</span>
                            <button className='button-qtd' onClick={()=> handleChangeQtd(item, 'add')}>+</button>
                          </div>
                        </div>
                      </div>
                    </CardIntem>

                  ))
                }

              </div>
              <div className='p-2'>
                {
                  amount > 0 && <span>Total: {amount} </span>
                }

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
