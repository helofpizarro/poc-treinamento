import React, {useEffect, useState} from 'react';
import { a } from 'react-spring';

import { Table, Border, Form, Button } from './style'


type ListProps = {
  nome: string
  altura: string
  peso: number
  imc: number
  resultado: string
  id: number
}

const getResult = (imc: number) => {
   if(imc <= 18.5){
    return 'abaixo do peso'
   } else if(imc >= 18.5 && imc <= 24.9) {
      return 'peso ideal'
   } else if(imc >= 25 && imc <= 29.9) {
      return 'acima do peso'
   } else {
      return 'obeso'
   }

}

const getImc = (alt: number, peso: number) => {
   return peso / (alt ** 2)
}

const getHeight = (array: ListProps[]) => {
  const getTotal = array.reduce((acumulator,value) => {
      return acumulator + parseFloat(value.altura)

  }, 0)
  const media = getTotal / array.length || 0
  return parseFloat(media.toString()).toFixed(2)
}
const getWeight = (array: ListProps[]) => {
  const getTotal = array.reduce((acumulator,value) => {
      return acumulator + value.peso

  }, 0)
  const media = getTotal / array.length || 0
  return parseFloat(media.toString()).toFixed(2)
}

const getIMC = (array: ListProps[]) => {
  const getTotal = array.reduce((acumulator,value) => {
      return acumulator + value.imc

  }, 0)
  const media = getTotal / array.length || 0
  return parseFloat(media.toString()).toFixed(2)
}

const Imc = () => {
  const [list, setList] = useState<ListProps[]>([])
  const [ searchList, setSearchList] = useState<ListProps[]>([])
  const [name, setName ] = useState('')
  const [alt, setAlt] = useState('')
  const [peso, setPeso] = useState('')
  const [id, setId] = useState(0)
  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')

  const handleEdit = () => {
    const newList = list.map(item => {
      if(item.id === id){
        return {
          ...item,
          nome: name,
          altura: alt,
          peso: parseInt(peso),
          imc: getImc(+alt, parseInt(peso)),
          resultado: getResult(getImc(+alt, parseInt(peso))),
        }
      } else {
        return item
      }
    })
    setList(newList)
  }

  const handleAdd = () => {
    const exist = list.find(item => item.id === id)
    if(exist){
      handleEdit()
    } else {
      const newList = {
        nome: name,
        altura: parseFloat(alt).toFixed(2),
        peso: parseInt(peso),
        imc: getImc(+alt, parseInt(peso)),
        resultado: getResult(getImc(+alt, parseInt(peso))),
        id: list.length + 1
      }
      setList([...list, newList])
      setSearchList([...list, newList])
    }
    setName('')
    setAlt('')
    setPeso('')
  }

  const handleSelect = ({nome, altura, peso, id}: ListProps) => {
      setName(nome)
      setAlt(altura)
      setPeso(peso.toString())
      setId(id)
  }

  const handlDelet = (id: number) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
    setSearchList(newList)
  }

 useEffect(() => {
   const newList = searchList.filter(item => item.nome.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0)
   setList(newList)

 },[search])

 useEffect(() => {
  if(select === 'menor altura'){
    const newList = searchList.sort((a, b) => {
      if(a.altura > b.altura){
        return 1
      }
      if(a.altura < b.altura){
        return -1
      }
      return 0
    })
      setList(newList)
      setSelect('')
    }
    if(select === 'maior altura'){
      const newList = searchList.sort((a, b) => {
      if(a.altura > b.altura){
        return -1
      }
      if(b.altura < a.altura){
        return 1
      }
      return 0
    })
    setList(newList)
    setSelect('')

  }
  if(select === 'menor peso'){
    const newList = searchList.sort((a, b) => a.peso - b.peso)
    setList(newList)
    setSelect('')

  }
  if(select === 'maior peso'){
    const newList = searchList.sort((a, b) => b.peso - a.peso)
    setList(newList)
    setSelect('')

  }
  if(select === 'maior imc'){
    const newList = searchList.sort((a, b) => b.imc - a.imc)
    setList(newList)
    setSelect('')

  }
  if(select === 'menor imc'){
    const newList = searchList.sort((a, b) => a.imc - b.imc)
    setList(newList)
    setSelect('')

  }
 }, [select])


  return (
    <section className='py-5'>
      <div className='container'>
          <input type='text' placeholder='Buscar Nome' onChange={(event) => setSearch(event.target.value)}/>
          <select onChange={(event) => setSelect(event.target.value)}>
            <option>Todos: </option>
            <option value='menor altura'>Menor altura</option>
            <option value='maior altura'>Maior altura</option>
            <option value='menor peso'>Menor peso</option>
            <option value='maior peso'>Maior peso</option>
            <option value='maior imc'>Maior IMC</option>
            <option value='menor imc'>Menor IMC</option>
          </select>
        <div className='row d-flex justify-content-center'>
          <Border>

            <Table>
              <thead>
                <tr>
                  <th>
                    Nome
                  </th>
                  <th>
                    Altura
                  </th>
                  <th>
                    Peso
                  </th>
                  <th>
                    IMC
                  </th>
                  <th>
                    Resultado
                  </th>
                </tr>
              </thead>

              <tbody>
                {
                  list.map(item => (
                    <>
                    <tr>
                      <td onClick={() => handleSelect(item)}>{item.nome}</td>

                      <td onClick={() => handleSelect(item)}>{item.altura}</td>

                      <td onClick={() => handleSelect(item)}>{item.peso}</td>

                      <td>{parseInt(`${item.imc}`)}</td>
                      <td>{item.resultado}</td>
                    <td>
                    <button onClick={() => handlDelet(item.id)}>Deletar</button>
                    </td>
                    </tr>
                    </>
                  ))
                }
              </tbody>
            </Table>
          </Border>

          <Form>
            <div className='mb-5'>
              <h6>Média altura: {getHeight(searchList)}</h6>
              <h6>Média de peso: {getWeight(searchList)}</h6>
              <h6>Média de IMC: {getIMC(searchList)}</h6>
            </div>
            <div className='row d-flex align-items-end'>
              <div className='col-12 col-md-3'>
                <label className='d-block' htmlFor='name'>Nome</label>
                <input type='text' placeholder='Digite seu nome' id='name' onChange={(event) => setName(event.target.value)} value={name}/>
              </div>
              <div className='col-12 col-md-3'>
                <label className='d-block' htmlFor='altura'>Altura</label>
                <input type='text' placeholder='Digite seu nome' id='altura' onChange={(event) => setAlt(event.target.value)} value={alt}/>
              </div>
              <div className='col-12 col-md-3'>
                <label className='d-block' htmlFor='peso'>Peso</label>
                <input type='text' placeholder='Digite seu nome' id='peso' onChange={(event) => setPeso(event.target.value)} value={peso}/>
              </div>
              <div className='col-12 col-md-3'>
                <Button onClick={() => handleAdd()}>Adicionar</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Imc
