import React, { useState, useEffect } from 'react'

// Components
import ContactForm from 'src/components/ContactForm'
import ContactList from 'src/components/ContactList'

// Styled
import { Section, Content } from './style'

type ContactProps = {
  name: string
  number: string
  id: number
  
}


const list: ContactProps[] | any = []

const Contacts = () => {
  const [ contacts, setContacts ] = useState<ContactProps[]>([])
  const [ contact, setContact ] = useState<ContactProps>()
  const [ name, setName ] = useState('')
  const [ number, setNumber ] = useState('')
  const [ id, setId ] = useState(0)
  const [ disable, setDisable ] = useState(false)

  
  useEffect(() => {
    if(contact ){
    
      setContacts([...contacts, contact ])
    
    }
  }, [contact])
  

  return (
    <Section className='py-5'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-10'>
            <Content>
              <div className='row'>
                <div className="col-12 col-md-6">
                  <ContactForm 
                  contact={contact} 
                  setContact={setContact} 
                  name={name} 
                  number={number} 
                  setName={setName} 
                  setNumber={setNumber} 
                   id={id}
                   contacts={contacts}
                    setContacts={setContacts}
                    disable={disable} 
                    setDisable={setDisable}

                  />
                </div>
                <div className="col-12 col-md-6">
                  {
                    contacts.length > 0 && (
                      <ContactList 
                      contacts={contacts}  
                      setName={setName} 
                      setNumber={setNumber} 
                      setId={setId}
                      setContacts={setContacts}
                      setDisable={setDisable}
                      />

                    )
                  }
                </div>
              </div>
            </Content>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contacts
