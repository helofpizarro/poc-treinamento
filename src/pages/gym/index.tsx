import React, {useEffect, useState} from 'react'
import generateJSON from 'src/assets/data/pessoas/generate.json'
import trainingJSON from 'src/assets/data/pessoas/training.json'

type PersonProps ={
  id: string
  isActive: boolean
  age: number
  name: string
  gender: string
  email: string
  phone: string
}

type UseProps = {
  use_id: string
  training: TrainingProps[]

}

type TrainingProps = {
  name: string
  repeticoes: number
  serie: number

}

const Gym = () => {
  const [treino, setTreino] = useState('')
  const [sugestions, setSugestions] = useState<PersonProps[]>([])
  const [listPeople, setListPeople] = useState<PersonProps[]>([])
  const [peopleInfo, setPeopleInfo] = useState<UseProps>()

  const handleChange = () => {
    if(treino.length >= 3) {
      const newSugestions = generateJSON.filter(item => item.name.toLocaleLowerCase().indexOf(treino.toLocaleLowerCase()) >= 0)
      setSugestions(newSugestions)
    } else {
      setSugestions([])
    }
  }

  useEffect(() => {
    handleChange()
  },[treino])

  const handleSearch = () => {
     const newList = generateJSON.filter(item => item.name.toLocaleLowerCase().indexOf(treino.toLocaleLowerCase()) >= 0)
     setListPeople(newList)
     setTreino('')

  }

  const handleSeletc = (id: string) => {
     const training = trainingJSON.find((item: UseProps) => item.use_id === id)
     if(training){
      setPeopleInfo(training)
     }

  }

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div>
              <input type='text' placeholder='Digite seu nome' onChange={(event) => setTreino(event.target.value)} value={treino}/>
              <button onClick={() => handleSearch()} >Buscar</button>
            </div>
            {
              sugestions.length > 0 && (
                <ul>
                  {
                    sugestions.map(item => (
                      <li onClick={() => handleSeletc(item.id)}>
                        {item.name}
                      </li>
                    ))
                  }
                </ul>
              )
            }
            <div className='mt-4'>
              {
                listPeople.length > 0 && (
                  listPeople.map(item => (
                     <h4 onClick={() => handleSeletc(item.id)}>{item.name}</h4>
                  ))
                )
              }
            </div>
          </div>
          <div className='col-12 col-md-6'>
             {
               peopleInfo && (
                 <ul>
                   {
                     peopleInfo.training.map(item => (
                       <li>
                         {
                           item.name
                         }
                         -
                         {
                           item.serie
                         }
                         x
                         {
                           item.repeticoes
                         }
                       </li>
                     ))
                   }
                 </ul>
               )
             }
          </div>
        </div>
      </div>
    </section>
  )
}

 export default Gym
