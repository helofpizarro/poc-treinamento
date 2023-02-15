import React, {useState} from 'react'

import {Input, Button, Content} from 'src/styles/ui'


type ListProps = {
  name:string
  porcentagem: string
  id: number
}

const HardSkills = () => {
  const [list, setList] = useState<ListProps[]>([])
  const [name, setName] = useState('')
  const [percentage, setPercentage] = useState('')
  const [id, setId] = useState(0)

  const handleAdd = () => {
    const find = list.find(item => item.id === id)
    if(find){
      const newList = list.map(item => {
        if(item.id === id){
           return {
              ...item,
              name: name,
              porcentagem: percentage
           }
        } else {
          return item
        }
      })
      setList(newList)
    } else {
      const newList = {
        name: name,
        porcentagem: percentage,
        id: list.length + 1
      }
      setList([...list, newList])
    }
    setName('')
    setPercentage('')
  }

  const handleSelect = ({name, id, porcentagem}: ListProps) => {
     setName(name)
     setPercentage(porcentagem)
     setId(id)
  }

  const handleDelet = (id: number) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
             <Input type='text' placeholder='Digite sua hard skills' onChange={(event) => setName(event.target.value)} value={name}/>
             <Input type='text' placeholder='Digite seu progresso' onChange={(event) => setPercentage(event.target.value)} value={percentage}/>
             <div className='mt-3'>
             <Button onClick={() => handleAdd()}>Adicionar</Button>
             </div>
          </div>
          <div className='col-6'>
            {
              list.map(item => (
              <Content>
                <h4>{item.name}</h4>
                <div className='d-flex align-items-center'>
                <label className='d-block mb-0 mr-3'>{item.porcentagem}%</label>
                <progress value={item.porcentagem} max='100'></progress>
                </div>
                <Button onClick={() => handleSelect(item)}>Editar</Button>
                <Button onClick={() => handleDelet(item.id)}>Deletar</Button>
              </Content>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default HardSkills
