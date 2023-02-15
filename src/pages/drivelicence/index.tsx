import React, { useState } from 'react'

import { Section, Button, Label, Input, Text } from './style'


const DriveLicence = () => {
    const [ age, setAge ] = useState<number>(0)
    const [ message, setMessage ] = useState('')
    const [ name, setName] = useState('')
    const [ country, setCountry ] = useState('usa')

    const licence = () => {
        if(age >= 18 && country === 'bra') {
            setMessage(`${name} pode tirar habilitação`)
        } else if(age >= 16 && country === 'usa') {
            setMessage(`${name} pode tirar habilitação`)
        } else {
            setMessage(`${name} Não pode tirar habilitação no ${country}`)
        }
        
    }

    return(
        <Section>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Quando posso tirar a minha carteira de habilitação?</h1>
                    </div>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-12'>
                                <Label>Nome</Label>
                                <Input type='text' placeholder='Seu nome' onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div className='col-12'>
                                <Label>Idade</Label>
                                <Input type='text' placeholder='Sua idade' onChange={(event) => setAge(parseInt(event.target.value))}/>
                            </div>
                            <select onChange={(event) => setCountry(event.target.value)}>
                                <option value='usa'>Estados Unidos</option>
                                <option value='bra'>Brasil</option>
                            </select>
                            <div className='col-12 text-center'>
                                <Button onClick={() => licence()}>Verificar</Button>
                            </div>
                            <Text>
                            {message}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default DriveLicence