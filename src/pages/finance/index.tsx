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
  Select,
  Total,
  Form
} from './style'

type ListProps = {
  title: string
  value: number
  status: string
  id: number
  date: string
}

const getTotal = (list:  ListProps[]) => {
   const total = list.reduce((acumulator,valor) => {
      return acumulator + (valor.status === 'down' ? - valor.value : valor.value)
   }, 0)
   return total
}

const Finance = () => {
  const [list, setList] = useState<ListProps[]>([])
  const [title, setTitle ] = useState('')
  const [value, setValue] = useState(0)
  const [date, setDate] = useState('')
  const [id, setId] = useState(0)
  const [listFilter, setListFilter] = useState<ListProps[]>([])
  const [orderBy, setOrderBy] = useState('')
  const [menor, setMenor] = useState('')
  const [maior, setMaior] = useState('')
  const [search, setSearch] = useState('')

  const handleClick = (status: string) => {
    if(title === '' || value === 0 || date === '') return
    const exitInList = list.find(item => item.id === id)
    if(exitInList){
      const newList = list.map(item => {
        if(item.id === id){
          return {
            ...item,
            title: title,
            value: value,
            date: date,
            status: status,
          }
        } else {
          return item
        }
      })
      setList(newList)
      setId(0)
      setListFilter(newList)
    } else {
      const extrato = {
        title: title,
        value: value,
        date: date,
        id: list.length + 1,
        status: status
      }
      setList([...list, extrato])
      setListFilter([...list, extrato])
    }
    setTitle('')
    setDate('')
    setValue(0)
  }

  const handleSelect = ({title, id, date, value}: ListProps) => {
    setTitle(title)
    setValue(value)
    setValue(value)
    setDate(date)
    setId(id)
  }

  const handleDelet = (id: number) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
    setListFilter(newList)
  }

  const orderByStatus = (status: string) => {
    if(status !== ''){
      const filter = listFilter.filter(item => item.status === status)
      setList(filter)
    } else {
      setList(listFilter)
    }
  }


  useEffect(() => {
    const params = orderBy.split('-')
    if(params[0] === 'date' && params[1] === 'novos'){
        const newList = list.sort((a, b) => parseInt(a.date.split('-').reverse().join('')) - parseInt(b.date.split('-').reverse().join('')))
        setList(newList)
        setOrderBy('')
    }
    if(params[0] === 'date' && params[1] === 'antigo'){
     const newList = list.sort((a, b) => parseInt(b.date.split('-').reverse().join('')) - parseInt(a.date.split('-').reverse().join('')))
     setList(newList)
     setOrderBy('')
    }
    if(params[0] === 'price' && params[1] === 'maior'){
      const newList = list.sort((a, b) => a.value - b.value)
      setList(newList)
      setOrderBy('')
    }
    if(params[0] === 'price' && params[1] === 'menor'){
      const newList = list.sort((a, b) => b.value - a.value)
      setList(newList)
      setOrderBy('')
    }
  }, [orderBy ])

  useEffect(() => {
    if(menor !== '' && maior === ''){
      const newList = listFilter.filter(item => item.value >= parseInt(menor))
      setList(newList)
    }
    if(menor === '' && maior !== ''){
      const newList = listFilter.filter(item => item.value <= parseInt(maior))
      setList(newList)
    }
    if(menor === '' && maior === ''){
      setList(listFilter)
    }
    if(menor !== '' && maior !== ''){
      const newList = listFilter.filter(item => item.value >= parseInt(menor) && item.value <= parseInt(maior))
      setList(newList)
    }
  },[maior, menor])

  useEffect(() => {
    const newList = listFilter.filter(item => item.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0)
    setList(newList)
  },[search])

  return (
    <Section className='py-5'>
      <div className='container'>
        <div className='row d-flex justify-content-between'>
          <div className='col-12 col-md-4'>
            <Form>
              <h2 className='mb-4'>Organize seu dinheiro</h2>
              <div className='row'>
                <div className='col-12 mb-3'>
                  <Label className='d-block'>Titulo</Label>
                  <Input
                    type='text'
                    placeholder='Digite o nome da sua entrada ou saída'
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                  />
                </div>
                <div className='col-12 mb-3'>
                  <Label className='d-block'>Valor</Label>
                  <Input
                    type='number'
                    placeholder='Digite o valor'
                    onChange={(event) => setValue(parseInt(event.target.value))}
                    value={value}
                  />
                </div>
                <div className='col-12 mb-3'>
                  <Label className='d-block'>Data</Label>
                  <Input type='date' onChange={(event) => setDate(event.target.value)} value={date}/>
                </div>
                <div className='col-12 mb-3'>
                  <Button className='up' onClick={() => handleClick('up')}>UP</Button>
                </div>
                <div className='col-12'>
                  <Button className='down' onClick={() => handleClick('down')}>Down</Button>
                </div>
                <div className='col-12 mt-3'>
                  <h3>total: </h3>
                  <Total negative={getTotal(listFilter) < 0}> R$ {getTotal(listFilter)}</Total>
                </div>
              </div>
            </Form>
          </div>

          <div className='col-12 col-md-6'>
            <div className='mb-3'>
              <Input type='text' placeholder='Digite sua busca' onChange={(event) => setSearch(event.target.value)}/>
            </div>
            <div className='row d-flex align-center justify-content-between mb-4'>
              <div className='col-12 col-md-6'>
                <Select onChange={(event) => orderByStatus(event.target.value)}>
                  <option value=''>Mostrar somente: </option>
                  <option value=''>Todos: </option>
                  <option value='down'>Down </option>
                  <option value='up'>UP </option>
                </Select>
              </div>
              <div className='col-12 col-md-6'>
                <Select onChange={(event) => setOrderBy(event.target.value)}>
                  <option value=''>Ordenar por: </option>
                  <option value='date-novos'>Data - mais novos &gt; mais antigos </option>
                  <option value='date-antigo'>Data - mais antigos &gt; mais novos </option>
                  <option value='price-maior'>preço - Maior &gt; Menor </option>
                  <option value='price-menor'>preço - Menor &gt; Maior </option>
                </Select>
              </div>
            </div>
            <div className='d-flex align-items-center mb-5'>
              <Input type='text' placeholder='Valor minimo' onChange={(event) => setMenor(event.target.value)} value={menor}/>
              <h4 className='d-block mx-3 mb-0'> até </h4>
              <Input type='text' placeholder='Valor maximo' onChange={(event) => setMaior(event.target.value)} value={maior}/>
            </div>
            {
              list.map(item => (
                <FinanceItems key={item.id}>
                  <Text>{item.title}</Text>
                  <hr/>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Price className='mb-0' up={item.status === 'up' ? true : false}>
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
