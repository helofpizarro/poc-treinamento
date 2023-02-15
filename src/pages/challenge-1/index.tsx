import React, {useState, useEffect} from 'react';
import data from './assets/data/data.json'

// Desafio de renderizar a lista de compras com o itens da lista e o preço
// layout por sua conta

type ListProps = {
  id: string;
  product: string;
  price: string;
  categorie: string;
}

const Challenge1 = () =>{
  const [list, setList] = useState(data)
  const [product, setProduct ] = useState('')
  const [price, setPrice] = useState('')
  const [id, setId] = useState('')
  const [categorie, setCategorie] = useState('')
  const [categories, setCategories] = useState<string[]>([])
  const [search, setSearch] = useState(data)

  useEffect(() => {
    const newList = list.map(item => item.categorie)
    const newCat = newList.filter((item, i) => newList.indexOf(item) === i)
    setCategories(newCat)
  },[])
 

  const handleAdd = () => {
    const id = list.length + 1
    setList([...list, {
      id: id.toString(),
      product,
      price,
      categorie,
    }])
    setSearch([
      ...list,{
        id: id.toString(),
        product,
        price,
        categorie,

      }
    ])
    setProduct('')
    setPrice('')
  }
  const handleSelectEdit = (id: string, product: string, price: string) => {
    setProduct(product)
    setPrice(price)
    setId(id)
  
    
  }
  const handleEdit = () => {
    const newList = list.map(item => {
      if(item.id === id){
        return {
          ...item,
          product,
          price,
          categorie,
        }
      } else {
        return item
      }

    })
    setList(newList)
    setProduct('')
    setPrice('')
    setSearch(newList)
    

  }

  const handleDelete = (id: string) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
    setSearch(newList)
  }

  const handleFilter = (categoria: string) => {
    const newList = list.filter(item => item.categorie === categoria)
    setList(newList)
  }

  const handleSearch = (text: string) => {
     const newList = search.filter(item => item.product.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0)
     setList(newList)
  }
  
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='mb-3'>Lista</h3>
              <div className='d-flex'>
              <select onChange={(event) => handleFilter(event.target.value)}>
                {
                  categories.map(item => (
                    <option key={item}>{item}</option>

                  ))
                }
                
              </select>
                <input type='text' onChange={(event) => handleSearch(event.target.value)}/>
              </div>
            <ul >
            {
                list.map((item: ListProps) => (
                  <>
                  <li 
                    onClick={() => handleSelectEdit(item.id, item.product, item.price)} 
                    key={item.id}
                  >
                    {item.product} - {item.price} 
                  </li>
                  <div className='d-flex'>
                      {item.categorie}  
                    <button onClick={() => handleDelete(item.id)}>Delete</button>

                  </div>

                  </>
                  ))
                }
                
                </ul>
                <div className='row'>
                  <div className='col-12'>
                  <input type='text' onChange={(event) => setProduct(event.target.value)} placeholder='produto' value={product}/>

                  </div>
                  <div className='col-12'>
                    <input type='text' onChange={(event) =>  setPrice(event.target.value)} placeholder='preço' value={price}/>

                  </div>
                  <div className='col-12'>
                    <select onChange={(event) => setCategorie(event.target.value) }>
                      <option>doces</option>
                      <option>frutas</option>
                      <option>cafe</option>
                      <option>aves</option>
                      <option>hortifruti</option>
                      <option>padaria</option>
                      <option>açougue</option>
                    </select>
                  </div>
                </div>  
                <button onClick={() => handleAdd()}>Adicionar</button>
                <button onClick={() => handleEdit()}>Editar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Challenge1
