import React, { useState, useEffect } from 'react'

import { Section, Card, Input, Button } from './style'

import Edit from 'src/components/icons/edit'

type TaskProps = {
    id: number
    text: string
    done: boolean
}


const newList: TaskProps[] = []


const ToDo = () => {
    const [ text, setText ] = useState('')
    const [ list, setList ] = useState<TaskProps[]>([])
    const [ task, setTask ] = useState<TaskProps>()
    const [ id, setId] = useState(0)
    const [ edit, setEdit ] = useState<TaskProps>()
    const [ disabledAdd, setDisabledAdd] = useState(false)
    const [ disableEdit, setDisableEdit ] = useState(true)
   

    const handleAdd = () => {
        setTask({text, id, done: false})
        setId(id +1)
        setText('')

    }

    const handleDone = (id: number) => {
        const newList = list.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    done: true
                }
            }
            return item
        }) 
        setList(newList)
    }

    const handleEdit = (text: string, id: number) => {
        setText(text)
        setEdit({text, id, done: false})
        setDisableEdit(false)
        setDisabledAdd(true)
    }

    const handleChange = () => {
       if(edit){
          const newList = list.map(item => {
              if(item.id === edit.id) {
                  return {text, id: item.id, done: false}
              } 
              return item
          })
          setList(newList)
          setDisableEdit(true)
          setDisabledAdd(false)
         
       }
       setText('') 
    }
    const handleDelete = (id: number) => {
        const newList = list.filter(item => item.id !== id)
        setList(newList)
    }


    useEffect(() => {
        if(task && task.text !== ''){
  
            setList([...list, task])
           

        }
    }, [task])

    return (
       <Section className='py-5'>
           <div className='container'>
               <div className='row d-flex align-items-center'>
                   <div className='col-12 col-lg-6'>
                       <Input  type='text' placeholder='task' value={text} onChange={(event) => setText(event.target.value)}/>
                       <div className='row'>
                           <div className='col-12 col-md-6'>
                            <Button onClick={() => handleAdd()} disabled={disabledAdd}>Adicionar</Button>
                            </div>
                           <div className='col-12 col-md-6'>
                            <Button onClick={() => handleChange()} disabled={disableEdit} >Editar</Button>
                       </div>
                       </div>
                      
                   </div>
                   <div className='col-12 col-lg-8 mt-5'>
                        <Card>
                            {
                                list.map(item => (
                                    <>
                                    {
                                        item.done ? <s><h3>{item.text}</h3></s> : <h3>{item.text}</h3>
                                    }
                                    
                                    <Button onClick={() => handleEdit(item.text, item.id)}> <Edit color='#fff'/> </Button>
                                    <Button onClick={() => handleDelete(item.id)}>Deletar</Button>
                                    <Button onClick={() => handleDone(item.id)}>Done</Button>
                                    </>
                                ))
                            }
                            
                          
                        
                        </Card>
                   </div>
               </div>
           </div>
       </Section> 
    )
}

export default ToDo