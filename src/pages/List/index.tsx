import React, {useState} from 'react';


type listProps = {
   id: number
   text: string 
}


const List = () => {
  const [list, setList] = useState<listProps[]>([])
  const [text, setText ] = useState<string>('') 
  const [id, setId] = useState('')
  


  const handleAdd = () => {
    if(id === ''){
      const object = {
        id: list.length,
        text: text
  
      }
      setList([...list, object])

    } else {
      const newList = list.map(item => {
        if(item.id === parseInt(id)){
          return {
            ...item,
            text: text,
          }
        } else {
          return item
        }
      })
      setList(newList)
      setId('')
    }
    setText('')
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
            <div className='row'>
              <input type='text'
                placeholder='Texto'
                value={text}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
              />
              <button type='button' onClick={() => handleAdd()}>
                Adicionar
              </button>
            </div>
          </div>

          <div className='col-12 col-md-6'>
            <h3 className='mb-4'>Coisas que você precisa melhorar</h3>
            <ul>
              {
                list.length > 0 && list.map((item: listProps) =>(
                  <li key={item.id}>
                    <span>{item.text} </span>
                    <button onClick={() => handleDelete(item.id)}>Dell</button>
                    <button onClick={() => setId(item.id.toString())}>edit</button>
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

export default List
