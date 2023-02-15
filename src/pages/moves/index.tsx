import React, {useEffect, useState} from 'react'

import {Button, Input, Select, Content, Range} from 'src/styles/ui'

type MovesProps = {
  name: string
  nota: string
  genero: string
  idade: number
  id: number
}

const Moves = () => {
  const [list, setList] = useState<MovesProps[]>([])
  const [bkp, setBkp] = useState<MovesProps[]>([])
  const [name, setName] = useState('')
  const [genero, setGenero] = useState('')
  const [idade, setIdade] = useState('')
  const [nota, setNota] = useState('')
  const [id, setId] = useState(0)
  const [range, setRange] = useState(18)
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')

  const handleAdd = () => {
    if(name === '' || genero === '' || idade === '' || nota === '') return
    const secundList = list.find(item => item.id === id)
    if(secundList){
      const newList = list.map(item => {
        if(item.id === id){
          return {
            ...item,
            name: name,
            idade: parseInt(idade),
            nota: nota,
            genero: genero,
          }
        } else {
          return item
        }
      })
      setList(newList)
      setBkp(newList)

    } else {
      const newList = {
        name: name,
        genero: genero,
        idade: parseInt(idade),
        nota: nota,
        id: list.length + 1
      }
      setList([...list, newList])
      setBkp([...list, newList])
    }
    setName('')
    setGenero('')
    setIdade('')
    setNota('')
  }

  const handleSelect = ({name, idade, genero,nota, id}: MovesProps) => {
    setName(name)
    setIdade(idade.toString())
    setGenero(genero)
    setNota(nota)
    setId(id)
  }
  const handleDelet = (id: number) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
    setBkp(newList)
  }

  const handleChange = (categoria: string) => {
    if(categoria === 'Todos'){
       setList(bkp)
    } else {
      const newList = bkp.filter(item => item.genero === categoria)
      setList(newList)
    }
  }

  useEffect(() => {
    if(order === 'maior'){
      const newList = bkp.sort((a, b) => parseInt(b.nota) - parseInt(a.nota))
      setList(newList)
      setOrder('')
    }
    if(order === 'menor'){
      const newList = bkp.sort((a, b) => parseInt(a.nota) - parseInt(b.nota))
      setList(newList)
      setOrder('')
    }
  },[order])

  useEffect(() => {
     const newList = bkp.filter(item => item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0)
     setList(newList)
  }, [search])

  useEffect(() => {
    const newList = bkp.filter(item => item.idade <= range)
    setList(newList)
  }, [range])

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='mb-3'>
              <Select onChange={(event) => setGenero(event.target.value)}>
                <option>Escolher Genero</option>
                <option>Ação</option>
                <option>Aventura</option>
                <option>Terror</option>
                <option>Fantasia</option>
              </Select>
            </div>
            <div className='mb-3'>
              <Input type='text' placeholder='Digite o nome do filme' onChange={(event) => setName(event.target.value)} value={name}/>
            </div>
            <div className='mb-3'>
              <Input type='text' placeholder='Digite a idade' onChange={(event) => setIdade(event.target.value)} value={idade}/>
            </div>
              <div className='mb-3'>
              <Input type='text' placeholder='Digite a nota' onChange={(event) => setNota(event.target.value)} value={nota}/>
              </div>
              <Button onClick={() => handleAdd()}>Adicionar</Button>
          </div>
          <div className='col-12 col-md-6'>
          <div className='row'>
              <div className='col-6'>
                <Input type='text' placeholder='Digite o nome do filme' onChange={(event) => setSearch(event.target.value)}/>
              </div>
              <div className='col-6'>
                <Select onChange={(event) => handleChange(event.target.value)}>
                  <option value='Todos'>Todos: </option>
                  <option value='Ação'>Ação</option>
                  <option value='Aventura'>Aventura</option>
                  <option value='Terror'>Terror</option>
                  <option value='Fantasia'>Fantasia</option>
                </Select>
              </div>
              <div className='col-6'>
                <Select onChange={(event) => setOrder(event.target.value)}>
                  <option value='maior'>Maior nota</option>
                  <option value='menor'>Menor nota</option>
                </Select>
              </div>
              <div className='col-6 mt-3'>
                <label>Idade: {range}</label>
                <Range type='range' min='10' max='18' step='1' onChange={(event) => setRange(parseInt(event.target.value))}/>
              </div>
            </div>
            {
              list.map(item => (
              <Content className='mb-3'>
                <p>{item.name}</p>
                <p>{item.genero}</p>
                <p>{item.idade}</p>
                <p>{item.nota}</p>
                <div className='d-flex justify-content-between'>
                  <Button background='#dc143c' color='#fff' width='45%' onClick={() => handleDelet(item.id)}>Deletar</Button>
                  <Button background='#ffbf00' color='#fff' width='45%' onClick={() => handleSelect(item)}>Editar</Button>
                </div>
              </Content>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Moves
