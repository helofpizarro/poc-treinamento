import { NOMEM } from 'dns'
import React, {useState} from 'react'

const list = [
  {
    nome: 'limpar a casa',
    id: 1
  },
  {
    nome: 'cortar a grama',
    id: 2
  },
  {
    nome: 'ir ao mercado',
    id: 3
  }
]

type ListProps = {
  nome: string
  id: number
  done: boolean
}

const Crud = () => {
  const [list, setList] = useState<ListProps[]>([])
  const [text, setText] = useState('')
  const [id, setId] = useState(0)

  const handleAdd = () => {
     const task = {
       nome: text,
       id: list.length + 1,
       done: false
     }
     setList([...list, task])
     setText('')
    }

    const handleSelect = (nome: string, id: number) => {
      setText(nome)
      setId(id)
    }

    const handlEdit = () => {
      const newList = list.map(item => {
          if(id === item.id){
             return {
               ...item,
               nome: text,
             }
          } else {
            return item
          }
        })
        setList(newList)
        setText('')
    }

    const handleDelet = (id: number) => {
        const newList = list.filter(item => item.id !== id)
        setList(newList)
    }

    const handleDone = (id: number) => {
       const newList = list.map(item => {
         if(item.id === id){
           return {
             ...item,
             done: true
           }
         } else {
           return item
         }
       })
       setList(newList)
    }

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <input type='text' placeholder='Adicione uma tarefa' onChange={(event) => setText(event.target.value)} value={text}/>
            <button onClick={() => handleAdd()}>Adicionar</button>
            <button onClick={() => handlEdit()}>Editar</button>
          </div>
          <div className='col-12'>
            <ul>
              {
                list.map(item => (
                  <li>
                    {
                      item.done ? (
                        <s>
                           <h3 onClick={() => handleSelect(item.nome, item.id)}>
                          {item.nome}
                          </h3>
                        </s>
                      ) : (
                      <h3 onClick={() => handleSelect(item.nome, item.id)}>
                        {item.nome}
                      </h3>
                      )
                    }
                      <button onClick={() => handleDelet(item.id)}>Deletar</button>
                      <button onClick={() => handleDone(item.id)}>Done</button>
                    </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crud
