import React, { useState } from 'react'

import * as Masks from 'inter-frontend-lib-util-form/lib/masks'

import { Label, Input, Button } from './style'

type ContactFormProps = {
  contact?: ContactProps
  setContact: Function
  setName: Function
  setNumber: Function
  name: string
  number: string
  setContacts: Function
  contacts: ContactProps[]
  id: number
  disable: boolean
  setDisable: Function
}

type ContactProps = {
  name: string
  number: string
  id: number
}

const Num = 0

const ContactForm = ({ contact, setContact, name, number, setName, setNumber, setContacts, contacts, id, disable, setDisable }: ContactFormProps) => {
 
  const [num, setNum ] = useState(0)

  const handleClick = () => {
    setContact({
      name, number,
      id: num + 1
    })
    setNum(num + 1)
    setName('')
    setNumber('')

  }

  const handleEdit = () => {
    if(number !== ''){
      const newContacts = contacts.map(item => {
        if(item.id ===  id){
          return {number, name, id}
        }
      })
      setContacts(newContacts)
    }
    setName('')
    setNumber('')
    setDisable(false)
  }

  return (
    <div className='row'>
      <div className='col-12 mb-3'>
        <Label>Nome</Label>
        <Input type='text' 
        placeholder='Nome do contato' 
        value={name} 
        onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className='col-12'>
        <Label>Contato</Label>
        <Input type='text' 
        placeholder='(00) 00000-0000' 
        value={Masks.MaskPHONE(number)} onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <div className='col-12 col-md-6'>
        <Button inverse onClick={() => handleEdit()} disabled={!disable}>Editar</Button>
      </div>
      <div className='col-12 col-md-6'>
        <Button onClick={() => handleClick()} disabled={disable}>
          Adiconar
        </Button>
      </div>
    </div>
  )
}

export default ContactForm
