import React, {useState} from 'react'

const list = [
  "Maria Heloisa",
  "Jeferson",
  "Mariana"

]

type ListProps = {
  nome: string
  age: string
  id: number
}

const Nomes = () => {
  const [text, setText] = useState('')
  const [age, setAge] = useState('')
  const [list, setList] = useState<ListProps[]>([])
  const [id, setId] = useState(0)

  const handleText = () => {
    const pessoa = {
      nome: text,
      age: age,
      id: list.length + 1
    }
      setList([...list, pessoa])
      setText('')
      setAge('')
  }

  const handleDelet = (id: number) =>{
     const newList = list.filter(item => item.id !== id)
     setList(newList)
  }

  const handleSelect = ({nome, age, id}: ListProps) => {
      setAge(age)
      setText(nome)
      setId(id)

  }

  const handleEdit = () => {
      const newList = list.map(item => {
          if(item.id === id){
            return {
              ...item,
              nome: text,
              age,

            }
          } else {
            return item
          }
      })
      setList(newList)
      setAge('')
      setText('')
  }

  return (
    <section className='py-5'>
       <div className='container'>
         <div className='row'>
           <div className='col-12'>
             <input type='text' placeholder='nome' onChange={(event) => setText(event.target.value)} value={text}/>
              <input type='text' placeholder='idade' onChange={(event) => setAge(event.target.value)} value={age}/>
             <button onClick={() => handleText()}>Adicionar</button>
             <button onClick={() => handleEdit()}>Editar</button>
             {
               list.map(item => (
                 <div key={item.age}>
                 <h2 onClick={() => handleSelect(item)}>nome: {item.nome}</h2>
                 <h2 onClick={() => handleSelect(item)}>idade: {item.age}</h2>
                 <button onClick={() => handleDelet(item.id)}>Delete</button>
                </div>
               ))
             }
           </div>
         </div>
      </div>
    </section>
  )
}

export default Nomes
