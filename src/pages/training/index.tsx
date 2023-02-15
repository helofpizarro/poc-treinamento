import React, {useState} from 'react'



type TrainingProps = {
  nome: string
  repeticao: string
  serie: string
  id: number
}


const Training = () => {
  const [list, setList] = useState<TrainingProps[]>([])
  const [serie, setSerie] = useState('')
  const [treino, setTreino] = useState('')
  const [rep, setRep] = useState('')
  const [id, setId] = useState(0)

  const handleAdd = () => {
    const training = {
       nome: treino,
       serie: serie,
       repeticao: rep,
       id: list.length + 1
    }
    setList([...list, training])
    setSerie('')
    setTreino('')
    setRep('')

  }

  const handleClick = ({nome, serie, repeticao, id}: TrainingProps) => {
     setTreino(nome)
     setSerie(serie)
     setRep(repeticao)
     setId(id)

  }

  const handleEdit = () => {
    const newList = list.map(item => {
      if(item.id === id){
        return {
          ...item,
          nome: treino,
          serie: serie,
          repeticao: rep

        }
      } else {
        return item
      }
    })
    setList(newList)
    setSerie('')
    setTreino('')
    setRep('')
  }

  const handleDelete = (id: number) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div>
              <input type='text' placeholder='digite seu treino' onChange={(event) => setTreino(event.target.value)} value={treino}/>
            </div>
            <div>
              <input type='text' placeholder='quantidade de série' onChange={(event) => setSerie(event.target.value)} value={serie}/>
            </div>
            <div>
              <input type='text' placeholder='quantidade de repetição' onChange={(event) => setRep(event.target.value)} value={rep}/>
            </div>
            <button onClick={() => handleAdd()}>Adicionar</button>
            <button onClick={() => handleEdit()}>Editar</button>
          </div>
        <div className='col-12 col-md-6'>
          <ul>
            {
              list.map(item => (
                <>
                <li onClick={() => handleClick(item)}>
                <span className='d-block'>{item.nome}</span>
                <span className='d-block'>{item.repeticao} x {item.serie}</span>

                </li>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
                </>
              ))
            }
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Training
