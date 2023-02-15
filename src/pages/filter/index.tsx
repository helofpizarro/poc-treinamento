import React, {useEffect, useState} from 'react'
import pessoas from 'src/assets/data/pessoas/pessoas.json'



const Filter = () => {
  const [list, setList] = useState(pessoas)
  const [filter, setFilter] = useState('')
  const [max, setMax] = useState('')
  const [min, setMin] = useState('')
  const [orderBy, setOrderBy] = useState('')

  useEffect(() => {
   const newList = pessoas.filter(item => item.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) >= 0)
   setList(newList)
  },[filter])

  useEffect(() => {
    if(orderBy === 'age-maior'){
      const newList = pessoas.sort((a, b) => b.age - a.age)
      setList(newList)
      setOrderBy('')
    }
    if(orderBy === 'age-menor'){
      const newList = pessoas.sort((a, b) => a.age - b.age)
      setList(newList)
      setOrderBy('')
    }
    if(orderBy === ''){
      setList(pessoas)
      setOrderBy('')
    }
    if(orderBy === 'a'){
      const newList = pessoas.sort((a, b) =>  {
        if(a.name > b.name){
           return 1
        }
        if(a.name < b.name){
          return -1
        }
        return 0
      })
      setList(newList)
      setOrderBy('')
    }
    if(orderBy === 'z'){
      const newList = pessoas.sort((a, b) =>  {
        if(a.name > b.name){
           return -1
        }
        if(a.name < b.name){
          return 1
        }
        return 0
      })
      setList(newList)
      setOrderBy('')
    }

  }, [orderBy])

  useEffect(() => {
     if(min !== '' && max === ''){
        const newList = pessoas.filter(item => item.age >= parseInt(min))
        setList(newList)
     }
     if(max !== '' && min === ''){
       const newList = pessoas.filter(item => item.age <= parseInt(max))
       setList(newList)
     }
     if(max !== '' && min !== ''){
       const newList = pessoas.filter(item =>  item.age >= parseInt(min) && item.age <= parseInt(max))
       setList(newList)
     }
     if(max === '' && min === ''){
       setList(pessoas)
     }
  }, [min, max])

  const handleSelect = (text: string) => {
     if(text !== ''){
        const newList = pessoas.filter(item => item.gender === text)
        setList(newList)

     } else {
       setList(pessoas)
     }
  }

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <input type='text' placeholder='Digite um nome' onChange={(event) => setFilter(event.target.value)}/>
            <div>
            <input type='text' placeholder='idade minima' onChange={(event) => setMin(event.target.value)}/>
            <input type='text' placeholder='idade maxima' onChange={(event) => setMax(event.target.value)}/>
            </div>
            <select onChange={(event) => handleSelect(event.target.value)}>
              <option value=''>Todos</option>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
            </select>
            <select onChange={(event) => setOrderBy(event.target.value)}>
              <option value=''>Todos</option>
              <option value='age-maior'>idade - Maior &gt; Menor </option>
              <option value='age-menor'>idade - Menor &gt; Maior </option>
              <option value='a'>nome - a até z </option>
              <option value='z'>nome - z até a </option>
            </select>
          </div>
          <div className='col-12 col-md-6'>
            <ul>
            {
              list.map(item => (
                <li>
                  <h3>{item.name}</h3>
                  <h4>{item.age}</h4>
                  <span>{item.gender}</span>
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

export default Filter
