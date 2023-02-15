import React, {useState} from 'react'

import { Section, Label, Input, Button, Text } from './style'

const Vote = () => {
  const [ name, setName ] = useState<string>('')
  const [ age, setAge ] = useState<string>('')
  const [ mensage, setMensage ] = useState<string>('')
  const [ showMensage, setShowMensage ] = useState<boolean>(false)
  const [showButton, setShowButton ] = useState<boolean>(false)


  const handleClean = () => {
    setName('')
    setAge('')
    setMensage('')

  }

  const handleClick = () => {
    if (parseInt(age) < 16) {
      setMensage(`Desculpe ${name} mas você ainda é muito jovem para votar!`);
    } else if (parseInt(age) >= 16 && parseInt(age) < 18) {
      setMensage(`Show de bola ${name} você já pode votar mas seu voto é opcional!`);
    } else if (parseInt(age) >= 18 && parseInt(age) < 65) {
      setMensage(`Show de bola ${name} você já pode votar e seu voto é obrigatório!`);
    } else {
      setMensage(`Show de bola ${name} você já pode votar mas seu voto é opcional!`);
    }

    setShowMensage(true)
    setShowButton(true)
  }

  return (
    <Section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Descubra se você pode votar</h1>
          </div>
          <div className='col-12'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <Label className='d-block'>Nome</Label>
                <Input
                  type='text'
                  placeholder='Seu nome'
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
              </div>
              <div className='col-12 col-md-6'>
                <Label className='d-block'>Idade</Label>
                <Input
                  type='text'
                  placeholder='Sua idade'
                  onChange={(event) => setAge(event.target.value)}
                  value={age}
                />
              </div>

              <div className='col-12 text-center'>
                <Button type='button' onClick={() => handleClick()}>
                  Verificar
                </Button>
                {
                  showButton && (
                    <Button type='button' onClick={() => handleClean()}>Limpar</Button>

                  )
                }
              </div>
            </div>
          </div>
          {
            showMensage && (
              <div className='col-12 text-center'>
                <Text>{mensage}</Text>
              </div>
            )
          }
        </div>
      </div>
    </Section>
  )
}

export default Vote
