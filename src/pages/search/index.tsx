import React, {useState} from 'react'

const texto = [
  {
    nome: 'Jeferson',
    email: 'jeferson.teste@gmail.com'
  },
  {
    nome: 'Maria Heloisa',
    email: 'maria.teste@gmail.com'
  },
  {
    nome: 'Julia',
    email: 'julia.teste@gmail.com'
  }
]

type pessoaProps = {
  email: string
  nome: string
}


const Search = () => {
  const [text, setText] = useState('')
  const [pessoa, setPessoa] = useState<pessoaProps>()


  const handleFind = () => {
    const pessoaFind = texto.find(item => item.email === text || item.nome.toLowerCase() === text.toLowerCase()) || {nome: '' , email: ''}
     setPessoa(pessoaFind)
  }

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <input type='text' placeholder='pesquise' onChange={(event) => setText(event.target.value)}/>
            <button onClick={() => handleFind()}>Buscar</button>
          </div>
          <div className='col-12'>
          <p>Nome: {pessoa?.nome}</p>
          <p>Email: {pessoa?.email}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search
