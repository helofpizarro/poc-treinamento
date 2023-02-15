import React, {useState} from 'react'



const List2 = () => {
    const [list, setList] = useState<string[]>([])
    const [text, setText] = useState<string>('')
    const [isEdit, setIsEdit] = useState(false)

    const handleDelet = (index: number) => {
       const newList = list.filter((item, pos) => pos !== index)
       setList(newList) 
    }

    const handleEdit = (index: number, item: string) => {
        if(text === ''){
            setText(item)
            setIsEdit(true)
        } else {
            const newList = list.map((srt, pos) => {
                if( pos === index){
                   return text     
                } else {
                    return srt
                }
            })
            setList(newList)
            setText('')
            setIsEdit(false)
        }
    }

    const handleAdd = () => {
        setList([...list, text])
        setText('')
        
    }

    return (
       <section className='py-5'>
           <div className='container'>
               <div className='row'>
                   <div className='col-6'>
                       <input type='text' placeholder='Adicionar' onChange={(event) => setText(event.target.value)} value={text}/>
                       <button onClick={() => handleAdd()} disabled={isEdit}>
                           Adicionar
                       </button>
                   </div>
                   <div className='col-6'>
                      <h3>Titulo</h3>
                      <ul>
                          {
                             list.map((item, index) => (
                                <li>
                                    <span>
                                        {item}
                                    </span>
                                    <button onClick={() => handleEdit(index, item)}>Edit</button>
                                    <button onClick={() => handleDelet(index)}>Delet</button>
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

export default List2 