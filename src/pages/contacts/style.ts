import styled from 'styled-components'

type ButtonProps = {
  inverse?: boolean;
}

export const Section = styled.section``

export const Content = styled.div`
  width: 100%;
  height: auto;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 3px 2px 15px #ccc;
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
  color: ${(props: ButtonProps) => props.inverse ? '#aa66bb' : '#fff'};
  background: ${(props: ButtonProps) => props.inverse ? '#fff': '#aa66bb'};
  border: 1px solid ${(props: ButtonProps) => props.inverse ? '#aa66bb' : '#fff' };
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
