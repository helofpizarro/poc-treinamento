import React, {useEffect, useState} from 'react'

import peopleJson from 'src/assets/data/pessoas/pessoas.json'

import {Input, Content, Button} from 'src/styles/ui'

type ListProps = {
  name: string
  email: string
  age: number
}
const getTotal = (array: ListProps[]) => {
   return array.reduce((ac, value) => {
      return ac + value.age
   },0)
}

const mediaAge = (array: ListProps[]) => {
  const total =  array.reduce((ac, value) => {
    return ac + value.age
  },0)
  return total / array.length
}

const SearchPeople = () => {
  const [list, setList] = useState<ListProps[]>(peopleJson)
  const [search, setSearch] = useState('')
  const [max, setMax] = useState('')
  const [min, setMin] = useState('')
  const [find, setFind] = useState<ListProps>()
  const [text, setText] = useState('')


  const handleFind = () => {
    const newList = peopleJson.find(item => item.email === text)
    setFind(newList)
  }

  useEffect(() => {
    if(max !== '' && min === ''){
      const newList = peopleJson.filter(item => item.age <= parseInt(max))
      setList(newList)
    }
    if(min !== '' && max === ''){
      const newList = peopleJson.filter(item => item.age >= parseInt(min))
      setList(newList)
    }
    if(min !== '' && max !== ''){
      const newList = peopleJson.filter(item => item.age >= parseInt(min) && item.age <= parseInt(max))
      setList(newList)
    }
    if(max === '' && min === ''){
      setList(peopleJson)
    }
  },[min, max])

  useEffect(() => {
     const newList = peopleJson.filter(item => item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0)
     setList(newList)
  },[search])

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 mb-4'>
            <Input type='text' placeholder='Busque uma pessoa' onChange={(event) => setSearch(event.target.value)}/>
            <div className=' d-flex mt-3'>
            <Input type='text' placeholder='Idade Minima' onChange={(event) => setMin(event.target.value)}/>
            <h4>Até</h4>
            <Input type='text' placeholder='Idade Maxima' onChange={(event) => setMax(event.target.value)}/>
            </div>
            <div className='d-flex mt-3'>
            <Input type='text' placeholder='buscar' onChange={(event) => setText(event.target.value)}/>
            <Button onClick={() => handleFind()}>Buscar</Button>
            </div>
            <div className='mt-3'>
              {
                find?.name && (
                <Content background='#f0f8ff'>
                  <h4>Name: {find?.name}</h4>
                    <p>Email: {find?.email}</p>
                    <p>Idade {find?.age}</p>
                </Content>
                )
              }
            </div>
            <h4>Total: {list.length}
            </h4>
            <h4>Total 18: {list.filter(item => item.age === 20).length}</h4>
            <h4> Total 30 até 50: {list.filter(item => item.age >= 30 && item.age <= 50).length}</h4>
            <h4>Total de Idade: {getTotal(list)}</h4>
            <h4>Média de idade: {mediaAge(list)}</h4>
          </div>
          <div className='col-6'>
            {
              list.map(item => (
                <Content className='mb-4'>
                  <h4>Name: {item.name}</h4>
                  <p>Email: {item.email}</p>
                  <p>Idade {item.age}</p>
                </Content>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPeople
