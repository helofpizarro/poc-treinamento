import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Label = styled.label`
  color: #cccccc;
  font-size: 14px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  background: #fff;
  padding: 0 16px;

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 48px;
  max-width: 450px;
  border-radius: 8px;
  color: #fff;
  background: #aa66bb;
  border: none;
  margin: 32px auto 0;
  transition: opacity 0.3s;
  display: block;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.9;
  }
`
export const Text = styled.span`
  font-size: 32px;
  margin-top: 40px;
  display: block;
`