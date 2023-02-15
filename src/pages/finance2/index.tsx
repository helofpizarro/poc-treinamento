import React, {useEffect, useState} from 'react'

// styles
import {
  Section,
  Label,
  Input,
  Button,
  FinanceItems,
  Text,
  Price,
  ButtonDelete,
  ButtonEdit,
  Select
} from './style'

type ListProps = {
  title: string
  value: number
  date: string
  id: number
  up: boolean
}

const getTotal = (array: ListProps[]) =>{
  const total = array.reduce((total, value) => {
   return total = total + (value.up ? value.value : - value.value)
  }, 0)
  return total
}

const Finance = () => {
  const [list, setList] = useState<ListProps[]>([])
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState(0)
  const [secundList, setSecundList] = useState<ListProps[]>([])
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  const handleEdit = (up: boolean) => {
    const newList = list.map(item =>  {
      if(item.id === id){
        return {
          ...item,
          title: title,
          value: parseInt(value),
          date: date,
          up: up,
        }
      } else {
        return item
      }
    })
    setList(newList)
    setSecundList(newList)
    setId(0)
  }

  const handleAdd = (up: boolean) => {
    const isExist = list.find(item => item.id === id)
    if(isExist){
      handleEdit(up)
    } else {
      const extract = {
        title: title,
        value: parseInt(value),
        date: date,
        id: list.length + 1,
        up: up
      }
      setList([...list, extract])
      setSecundList([...list, extract])
    }
    setTitle('')
    setValue('')
    setDate('')
  }

  const handleDelet = (id:number) => {
    const filter = list.filter(item => item.id !== id)
    setList(filter)
    setSecundList(filter)
  }


  const handleSelect = ({id, title, value, date}: ListProps) => {
     setDate(date)
     setValue(value.toString())
     setTitle(title)
     setId(id)

  }

  const handleStatus = (status: string) => {
    if(status === 'up'){
      const newList = secundList.filter(item => item.up)
      setList(newList)
    }
    if(status === 'down'){
      const newList = secundList.filter(item => !item.up)
      setList(newList)
    }
    if(status === 'todos'){
      setList(secundList)
    }
  }

  useEffect(() => {
    const newList = secundList.filter(item => item.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0)
    console.log(newList)
    setList(newList)
  }, [search])

  useEffect(() => {
      if(order === 'novos'){
        const newList = secundList.sort((a, b) => parseInt(b.date.split('-').reverse().join('')) - parseInt(a.date.split('-').reverse().join('')))
        setList(newList)
        setOrder('')
      }
      if(order === 'antigo'){
        const newList = secundList.sort((a, b) => parseInt(a.date.split('-').reverse().join('')) - parseInt(b.date.split('-').reverse().join('')))
        setList(newList)
        setOrder('')
      }
      if(order === 'maior'){
        const newList = secundList.sort((a, b) => b.value - a.value)
        setList(newList)
        setOrder('')
      }
      if(order === 'menor'){
        const newList = secundList.sort((a, b) => a.value - b.value)
        setList(newList)
        setOrder('')
      }
  }, [order])

  useEffect(() => {
    if(min !== '' && max === ''){
       const filter = secundList.filter(item => item.value >= parseInt(min))
       setList(filter)
    }
    if(max !== '' && min === ''){
      const filter = secundList.filter(item => item.value <= parseInt(max))
      setList(filter)
    }
    if(max !== '' && min !== ''){
      const filter = secundList.filter(item => item.value >= parseInt(min) && item.value <= parseInt(max))
      setList(filter)
    }
    if(max === '' && min === ''){
      setList(secundList)
    }
  }, [min, max])

  return (
    <Section className='py-5'>
      <div className='container'>
        <div className='row d-flex justify-content-between'>
          <div className='col-12 col-md-4'>
            <div>
              <h2 className='mb-4'>Organize seu dinheiro</h2>
              <div className='row'>
                <div className='col-12 mb-3'>
                  <Label className='d-block'>Titulo</Label>
                  <Input type='text' placeholder='Digite o nome da sua entrada ou saída' onChange={(event) => setTitle(event.target.value)} value={title}/>
                </div>
                <div className='col-12 mb-3'>
                  <Label className='d-block'>Valor</Label>
                  <Input type='text' placeholder='Digite o valor' onChange={(event) => setValue(event.target.value)} value={value}/>
                </div>
                <div className='col-12 mb-3'>
                  <Label className='d-block'>Data</Label>
                  <Input type='date' onChange={(event) => setDate(event.target.value)} value={date}/>
                </div>
                <div className='col-12 mb-3'>
                  <Button className='up' onClick={() => handleAdd(true)}>UP</Button>
                </div>
                <div className='col-12'>
                  <Button className='down' onClick={() => handleAdd(false)}>Down</Button>
                </div>
              </div>
            </div>
            <h2>Total: {getTotal(secundList)}</h2>
          </div>

          <div className='col-12 col-md-6'>
            <div className='mb-3'>
              <Input type='text' placeholder='Digite sua busca' onChange={(event) => setSearch(event?.target.value)}/>
            </div>
            <div className='row d-flex align-center justify-content-between mb-4'>
              <div className='col-12 col-md-6'>
                <Select onChange={(event) => handleStatus(event.target.value)}>
                  <option value=''>Mostrar somente: </option>
                  <option value='todos'>Todos: </option>
                  <option value='down'>Down </option>
                  <option value='up'>UP </option>
                </Select>
              </div>
              <div className='col-12 col-md-6'>
                <Select onChange={(event) => setOrder(event.target.value)}>
                  <option value=''>Ordenar por: </option>
                  <option value='novos'>Data - mais novos &gt; mais antigos </option>
                  <option value='antigo'>Data - mais antigos &gt; mais novos </option>
                  <option value='maior'>preço - Maior &gt; Menor </option>
                  <option value='menor'>preço - Menor &gt; Maior </option>
                </Select>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <Input type='text' placeholder='Valor minimo' onChange={(event) => setMin(event.target.value)}/>
              <h4 className='d-block mx-3 mb-0'> até </h4>
              <Input type='text' placeholder='Valor maximo' onChange={(event) => setMax(event.target.value)}/>
            </div>
              {
                list.map(item => (
                  <FinanceItems>
                  <Text>{item.title}</Text>
                  <hr/>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Price className='mb-0' up={item.up}>
                      <span>R$</span> {item.value}
                    </Price>
                    <span>{item.date}</span>
                  </div>
                  <div className='align-items-center justify-content-end mt-3 btns'>
                    <ButtonEdit onClick={() => handleSelect(item)}>Editar</ButtonEdit>
                    <ButtonDelete onClick={() => handleDelet(item.id)}>Deletar</ButtonDelete>
                  </div>
                </FinanceItems>
                ))
              }
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Finance
