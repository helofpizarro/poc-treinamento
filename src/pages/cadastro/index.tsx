import React, {useState} from 'react'


type RegiterProps = {
  nome: string
  email: string
  idade: string
  id: number
}

const Cadastro = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [register, setRegister] = useState<RegiterProps[]>([])
  const [id, setId] = useState(0)
  const [ search, setSearch] = useState<RegiterProps[]>([])
  const [direction, setDirection ] = useState(false)

  const handleCadastro = () => {
     const pessoa = {
       nome: name,
       email: email,
       idade: age,
       id: register.length + 1
     }
     const isExist = register.find(item => item.email === email)
     if(isExist){
       alert('essa pessoa já está cadastrada na lista')

      } else {
        setRegister([...register,pessoa ])
        setAge('')
        setEmail('')
        setName('')
        setSearch([...register, pessoa])
      }
  }

  const handleSelect = ({nome, email, idade, id}: RegiterProps) => {
      setAge(idade)
      setEmail(email)
      setName(nome)
      setId(id)
  }

  const handleEdit = () => {
      const newList = register.map(item => {
        if(item.id === id){
          return {
            ...item,
            nome: name,
            idade: age,
            email: email
          }
        } else {
          return item
        }
      })
      setRegister(newList)
      setSearch(newList)
  }

  const handleDelet = (id: number) => {
      const newList = register.filter(item => item.id !== id)
      setRegister(newList)
      setSearch(newList)
    }

    const handleSearch = (text: string) => {
      const newList = search.filter(item => item.nome.indexOf(text) >= 0 || item.email.indexOf(text) >= 0 || item.idade.indexOf(text) >= 0)
      setRegister(newList)
    }

    const handleOrderAge = () => {
      if(direction){
        setRegister(register.sort((a,b) => parseInt(a.idade) - parseInt(b.idade)))
        setDirection(false)
      } else {
        setRegister(register.sort((a,b) => parseInt(b.idade) - parseInt(a.idade)))
        setDirection(true)
      }
    }

    const handleOrderName = () => {
      if(direction){
        const newList = register.sort((a,b) => {
          if(a.nome < b.nome){
            return 1
          }
          if(a.nome > b.nome){
            return -1
          }
          return 0
        })
        setDirection(false)
         return setRegister(newList)
      } else {
        const newList = register.sort((a,b) => {
          if(a.nome > b.nome){
              return 1
            }
            if(a.nome < b.nome){
              return -1
            }
            return 0
          })
          setDirection(true)
         return setRegister(newList)
      }
    }

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <form>
              <div className='row'>
                <div className='col-12 mb-3'>
                  <label className='d-block'>Nome</label>
                  <input type='text' placeholder='Digite seu nome' onChange={(event) => setName(event.target.value)} value={name}/>
                </div>
                <div className='col-12 mb-3'>
                  <label className='d-block'>Email</label>
                  <input type='text' placeholder='Digite seu email' onChange={(event) => setEmail(event.target.value)} value={email}/>
                </div>
                <div className='col-12 mb-3'>
                  <label className='d-block'>Idade</label>
                  <input type='text' placeholder='Digite sua idade' onChange={(event) => setAge(event.target.value)} value={age}/>
                </div>
                <div className='col-12 mb-3'>
                  <button type='button' onClick={() => handleCadastro()}>Cadastrar</button>
                  <button type='button' onClick={() => handleEdit()}>Editar</button>
                </div>
              </div>
            </form>
          </div>
         <div className='col-12 col-md-6'>
           <div>
            <input type='text' placeholder='pesquise' onChange={(event) => handleSearch(event.target.value)} />
           </div>
            <button onClick={() => handleOrderAge()}>Ordenar por idade</button>
            <button onClick={() => handleOrderName()}>Ordenar por nome</button>
            {
              register.map((item:RegiterProps)  => (
                <div key={item.id} className='mb-4'>
                  <div onClick={() => handleSelect(item)}>
                    <div>
                      <p className='mb-0'>Nome: {item.nome}</p>
                    </div>
                    <div>
                      <p className='mb-0'>Email: {item.email}</p>
                    </div>
                    <div>
                      <p className='mb-0'>Idade: {item.idade}</p>
                    </div>
                  </div>
                  <button onClick={() => handleDelet(item.id)}>Deletar</button>
                </div>
              ))
            }
         </div>
        </div>
      </div>
    </section>
  )
}

export default Cadastro
