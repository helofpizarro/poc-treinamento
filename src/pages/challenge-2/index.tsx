import React, {useState, useEffect} from 'react'


const ProductList = [
    {
        produto: 'fruta',
        price: 100.00,
        id: 1,
        categorie: 'hortifruti',
        status: 'caro',    
    },
    {
        produto: 'carne',
        price: 100.00,
        id: 2,
        categorie: 'açougue',
        status: 'caro', 
    },
    {
        produto: 'pasta de amendoin',
        price: 65.00,
        id: 2,
        categorie: 'cereal',
        status: 'caro', 
    }
   
]

type ProdutProps = {
    categorie: string;
    produto: string;
    price: number;
    id: number;
    status: string;

}

const Challenge2 = () => {
    const [list, setList] = useState<ProdutProps[]>(ProductList)
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [categorie, setCategorie] = useState('')
    const [status, setStatus] = useState('')
    const [id, setId] = useState('')
    const [filterList, setfilterList] = useState<ProdutProps[]>([])
    const [order, setOrder] = useState('')
   


const handleSort = () => {
         if(order === 'Menor preço'){
             const newList = list.sort((a,b) => a.price - b.price)
            return newList
         } else if(order === 'Maior preço') {
            const newList = list.sort((a,b) => b.price - a.price)
             return newList
         } else {
             return list
         }
      
         
    }


    const handleSummit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newProduct = {
            id: list.length,
            produto: product,
            price: parseInt(price),
            categorie: categorie,
            status: status
        }
        setList([...list, newProduct])
        setfilterList([...list, newProduct])

        setProduct('')
        setPrice('')
        setStatus('')
        
        

    }
    const handleSelectEdit = (item: ProdutProps) => {
        setProduct(item.produto)
        setPrice(item.price.toString())
        setStatus(item.status)
        setId(item.id.toString())
    }

    const handleEdit = () => {
        const newList = list.map(item => {
            if (id === item.id.toString()) {
                return {
                    ...item,
                    producto: product, 
                    price: parseInt(price),
                    status: status, 

                }
            } else {
                return item
            }
            
           
        })
        setList(newList)
        setfilterList(newList)
        setProduct('')
        setPrice('')
        setStatus('')

    }
    const handleDelete = (id: number) => {
        const newList = list.filter(item => id !== item.id)
        setList(newList)
        setfilterList(newList)
        
    }

    const handleFilter = (event: string) => {
        const newList = filterList.filter(item => item.categorie === event)
        setList(newList)
      
    }
    


    return (
        <section className='py-5'>
            <div className='container'>
              <div className='row'>
                  <div className='col-12 col-md-6'>
                      <select onChange={(event : React.ChangeEvent<HTMLSelectElement>) => handleFilter(event.target.value)}>
                          <option>
                              bovinos
                          </option>
                          <option>
                              aves
                          </option>
                      </select>
                      <select  onChange={(event : React.ChangeEvent<HTMLSelectElement>) => setOrder(event.target.value)}>
                          <option>
                              Menor preço
                          </option>
                          <option>
                              Maior preço
                          </option>
                      </select>
                    <ul>
                        {
                         list.length > 0 && handleSort().map((item: ProdutProps) => (
                            <> 
                                <li key={item.id} onClick={() => handleSelectEdit(item)}>
                                    <span>{item.categorie}</span>
                                    <h3>Product: {item.produto}</h3>
                                    <span>Price: R$ {item.price} </span>
                                    <span>{item.status}</span>
                                </li>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>  
                                
                            </>
                        ))
                        }
                    </ul>
                  </div>
                  <div className='col-12 col-md-6'>
                    <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSummit(event)}>
                       <div className='row'>
                           <div className='col-12'>
                              <input 
                              type='text'
                               name='produto'
                               value={product} 
                               placeholder='produto' 
                               onChange={(event) => setProduct(event.target.value)}
                               />  
                           </div>
                           <div className='col-12'>
                              <input 
                              type='text' 
                              name='preco' 
                              value={price}
                              placeholder='preço' 
                              onChange={(event) => setPrice(event.target.value)}
                              />  
                           </div>
                           <div className='col-12'>
                               <input 
                               type='text' 
                               onChange={(event) => setStatus(event.target.value)}
                               value={status}
                               />
                           </div>
                           <div className='col-12'>
                              <select name='categoria' onChange={(event) => setCategorie(event.target.value)}>
                                  <option>
                                      selecione a categoria
                                  </option>
                                  <option>
                                      bovinos
                                  </option>
                                  <option>
                                      aves
                                  </option>
                              </select>
                           </div>
                           <div className='col-12'>
                              <button type='submit'>Adicionar</button> 
                              <button type='button' onClick={() => handleEdit()}>Editar</button> 
                           </div>
                        </div> 
                    </form>
                 </div>
                </div>  
            </div>    

        </section>
    )
}

export default Challenge2