import React, { useState } from 'react'

const listFake = [
	{
		name: 'chocolate',
		price: 10,
		id: 1
	},
	{
		name: 'bolacha',
		price: 20,
		id: 2
	},
	{
		name: 'pipoca',
		price: 15,
		id: 3
	}
]

type productProps = {
	name: string;
	id: number;
	price: number;
}


const DoceList = () => {
	const [list, setList] = useState<productProps[]>(listFake)
	const [text, setText] = useState('')
	const [price, setPrice] = useState('')
	const [id, setId] = useState(0)

	const handleAdd = () => {
		const product = {
			id: list.length + 1,
			name: text,
			price: parseInt(price)
		}
		setList([...list,product])
		setText('')	
		setPrice('')
	}

	const handleSelect = (id: number, name: string, price: number) =>{
		setPrice(price.toString())
		setText(name)
		setId(id)
	}

	const handleEdit = () => {
			const newList = list.map(item => {
				if(item.id === id){
					return {
						...item,
						name: text,
						price: parseInt(price),
					}
				} else {
					return item
				}
			})
			setList(newList)
	}

	const handleDelete = (id: number) => {
		const delet = list.filter(item => item.id !== id)
		setList(delet)
	}

	return (
		<section className='py-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<h2>Lista de Doce</h2>
						<ul>
						{
							list.map(item => (
								<>
								<li onClick={() => handleSelect(item.id, item.name, item.price)}>
									<h3>{item.name}</h3>
									<span>R$ {item.price}</span>
								</li>
								<button onClick={() => handleDelete(item.id)}>Delete</button>
								</>
								))
							}			
							</ul>
							
					</div>
					<div className='col-12 col-md-6'>
						<input type='text' onChange={(event) => setText(event.target.value)} placeholder='nome' value={text}/>
						<input type='text' onChange={(event) => setPrice(event.target.value)} placeholder='price' value={price}/>
						<button onClick={() => handleAdd()}>Adicionar</button>
						<button onClick={() => handleEdit()}>Editar</button>		
					</div>
				</div>
			</div>
		</section> 
	)
}

export default DoceList