import React, {useState} from 'react'

import {Section} from './style'

import {Input, Button, Content} from 'src/styles/ui'

type ErrorProps = {
  name: null | string
  email: null | string
  telefone: null | string
  cpf: null | string
}

type FormProps = {
  name: string
  email: string
  telefone: string
  cpf: string
  id: number
}

  const maskFone = (value: string) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
  }

  const nameValidation = (name: string) => {
    if (!name)
    return false;
    if (!name.match(/^([a-zA-ZÀ-ÿ- ]{2,}\s[a-zA-ZÀ-ÿ- ]{1,}'?-?[a-zA-ZÀ-ÿ- ]{2,}\s?([a-zA-ZÀ-ÿ-]{1,})?[^ ])/)) {
        return false;
    }
    return true;
  }

  const emailValidation = (email: string) => {
    if (!email)
    return false;
    if (!email.match(/^\(\d{2}\) \d{4,5}-\d{4}$/)) {
        return false;
    }
    return true;
  }
  const cpfMask = (value: string) => {
    value = value.replace(/\D/g, '');
    value = value.substring(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
  }

  const cpfValidation = (strCpf: string) => {
    if (strCpf.length < 14)
        return false;
    var invalidsCPF = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ];
    var regex = /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;
    var sum = 0;
    var rest;
    if (!strCpf)
        return false;
    if (!strCpf.match(regex))
        return false;
    strCpf = strCpf.replace(/\.|-/g, '');
    if (invalidsCPF.indexOf(strCpf) > -1)
        return false;
    //  Validates first digit
    for (var i = 0; i < 9; i++)
        sum += parseInt(strCpf.charAt(i)) * (10 - i);
    rest = 11 - (sum % 11);
    if (rest === 10 || rest === 11)
        rest = 0;
    if (rest !== parseInt(strCpf.charAt(9)))
        return false;
    sum = 0;
    //  Validates second digit
    for (var i = 0; i < 10; i++)
        sum += parseInt(strCpf.charAt(i)) * (11 - i);
    rest = 11 - (sum % 11);
    if (rest === 10 || rest === 11)
        rest = 0;
    if (rest !== parseInt(strCpf.charAt(10)))
        return false;
    return true;
  }


const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [id, setId] = useState(0)
  const [list, setList] = useState<FormProps[]>([])
  const [errors, setErrors] = useState<ErrorProps>({
    name: null,
    email: null,
    telefone: null,
    cpf: null
  })


  const handleSummit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let error: ErrorProps = {
      name: null,
      email: null,
      telefone: null,
      cpf: null
    }
    if(name === ''){
       error.name = 'O campo name não pode ser vazio'
    }
    if(email === ''){
      error.email = 'O campo email não pode ser vazio'
    }
    if(telefone === ''){
      error.telefone = 'O campo telefone não pode ser vazio'
    }
    if(cpf === ''){
      error.cpf = 'O campo cpf não pode ser vazio'
    }
    if(!nameValidation(name)){
       error.name = 'Nome inválido'
    }
    if(emailValidation(email)){
      error.email = 'Email inválido'
    }
    if(!cpfValidation(cpf)){
      error.cpf = 'CPF inválido'
    }
    setErrors(error)
    const exist = list.find(item => item.id === id)
    if(exist){
      const newList = list.map(item => {
        if(item.id === id){
          return {
            ...item,
            name: name,
            email: email,
            telefone: telefone,
            cpf: cpf,
          }
        } else {
          return item
        }

      })
      setList(newList)
    } else {
      const person = {
        name: name,
        email: email,
        telefone: telefone,
        cpf: cpf,
        id: list.length + 1
      }

      setList([...list, person])
    }

    setEmail('')
    setTelefone('')
    setName('')
    setCpf('')
  }



  const handleSelect = ({name, cpf, telefone, email, id}: FormProps) => {
    setName(name)
    setCpf(cpf)
    setTelefone(telefone)
    setEmail(email)
    setId(id)

  }

  const handleDelet = (id: number) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <Section className='py-5'>
      <div className='container'>
        <div className='row d-flex justify-content-between'>
          <div className='col-12 col-md-5'>
            <form onSubmit={(event) => handleSummit(event)}>
              <div className='row'>
                <div className='col-12 mb-3'>
                  <label className='d-block'>Nome</label>
                  <Input type='text' placeholder='Digite seu nome' onChange={(event) => setName(event.target.value)} name='name' value={name}/>
                  {
                    errors.name && <p>{errors.name}</p>
                  }
                </div>
                <div className='col-12 mb-3'>
                  <label className='d-block'>Email</label>
                  <Input type='text' placeholder='Digite seu email' onChange={(event) => setEmail(event.target.value)} name='email' value={email}/>
                  {
                    errors.email && <p>{errors.email}</p>
                  }
                </div>
                <div className='col-12 mb-3'>
                  <label className='d-block'>Telefone</label>
                  <Input type='text' placeholder='Digite seu telefone' onChange={(event) => setTelefone(event.target.value)} name='telefone' value={maskFone(telefone)}/>
                  {
                    errors.telefone && <p>{errors.telefone}</p>
                  }
                </div>
                <div className='col-12 mb-3'>
                  <label className='d-block'>CPF</label>
                  <Input type='text' placeholder='Digite seu cpf' onChange={(event) => setCpf(event.target.value)} name='cpf' value={cpfMask(cpf)}/>
                  {
                    errors.cpf && <p>{errors.cpf}</p>
                  }
                </div>
                <div className='col-12'>
                  <Button color='#fff'>Enviar</Button>
                </div>
              </div>
            </form>
          </div>
          <div className='col-12 col-md-5'>
            {
              list.map(item => (
                <Content className='mb-4'>
                  <h5>Nome: {item.name}</h5>
                  <h5>Email: {item.email}</h5>
                  <h5>Telefone: {item.telefone}</h5>
                  <h5>CPF: {item.cpf}</h5>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={() => handleSelect(item)} color='#fff' background='#ffbf00' width='45%'>Editar</Button>
                    <Button onClick={() => handleDelet(item.id)} color='#fff' background='#ec143c' width='45%'>Deletar</Button>
                  </div>
                </Content>
              ))
            }
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Form
