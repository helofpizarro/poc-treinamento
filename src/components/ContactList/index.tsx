import React from 'react'

// Styles
import { Content, Label, Text, Edit, Delete } from './style'

type ContactsListProps = {
    contacts: ContactProps[]
    setName: Function
    setNumber: Function
    setId: Function
    setContacts: Function
    setDisable: Function
}


type ContactProps = {
  name: string
  number: string
  id: number
}



const ContactList = ({ contacts, setName, setNumber, setId, setContacts, setDisable }: ContactsListProps) => {
  const handleEdit = (name: string, number: string, id: number) => {
      setName(name)
      setNumber(number)
      setId(id)
      setDisable(true)
    }
  

  const handleDelete = (id: number) => {
    if(id !== 0){
      const newList = contacts.filter(item => item.id !== id)
      // const index = contacts.indexOf(id)
      
      
       setContacts(newList)
    }
  }

  return (
    <>
    {
      contacts.map(item => (
        <Content>
          <div>
            <Label>nome</Label>
            <Text>{item.name}</Text>
          </div>
          <div>
            <Label>Número</Label>
            <Text>{item.number}</Text>
          </div>
          <div>
            <Edit onClick={() => handleEdit(item.name, item.number, item.id)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21V17.3284C3 16.798 3.21071 16.2893 3.58579 15.9142L15.5094 3.9906C16.3196 3.18035 17.6437 3.21517 18.4102 4.06689L20.2073 6.06369C20.9283 6.86481 20.8849 8.09318 20.109 8.84131L8.08106 20.4397C7.7083 20.7991 7.21064 21 6.69279 21H3Z" stroke="#aa66bb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 6L17.5 10.5" stroke="#aa66bb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 21H21" stroke="#aa66bb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </Edit>
            <Delete  onClick={() => handleDelete(item.id)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7H21" stroke="#aa66bb" stroke-width="2" stroke-linecap="round"/>
            <path d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7H7L7 5Z" stroke="#aa66bb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 7H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V7Z" stroke="#aa66bb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              
            </Delete>
          </div>
        </Content>

      ))
    }
    </>
  )
}

export default ContactList
