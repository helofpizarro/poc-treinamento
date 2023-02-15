import styled from 'styled-components'

export const Section = styled.section`


`


export const Card = styled.div`
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #ccc;
    box-shadow: 1px 2px 10px #f2f2f2;

    s{
        color: #ccc;
    }

`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 48px;
    padding: 16px;

`

export const Button = styled.button`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background: #ff6f9c;
    border: none;
    color: #ffffff;
    margin-top: 32px;
    max-width: 250px;

    &:focus{
        outline: none;
    }

    &[disabled]{
     background: #cccc;
  }
   

`