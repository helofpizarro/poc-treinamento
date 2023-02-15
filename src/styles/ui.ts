import styled from 'styled-components'

type uiProps = {
  color?: string
  width?: string
  background?: string
  display?: string
}

export const Input = styled.input`
  width: ${(props: uiProps) => props.width || '100%'};
  height: 48px;
  border: 1px solid ${(props: uiProps) => props.color || '#cccccc'};
  border-radius:8px;
  padding: 0 16px;
  background-color: ${(props: uiProps) => props.color || '#ffffff'};
  display: ${(props: uiProps) => props.display || 'block'};

  &:focus {
    outline: none;
  }
`

export const Select = styled.select`
  width: ${(props: uiProps) => props.width || '100%'};
  height: 48px;
  border: 1px solid ${(props: uiProps) => props.color || '#cccccc'};
  padding: 0 16px;
  background-color: ${(props: uiProps) => props.background || '#ffffff'};
  display: ${(props: uiProps) => props.display || 'block'};
`

export const Button = styled.button`
  width: ${(props: uiProps) => props.width || '100%'};
  height: 48px;
  border-radius: 8px;
  border: none;
  color: ${(props: uiProps) => props.color || '#1616161'};
  background-color: ${(props: uiProps) => props.background || '#cccccc'};
  display: ${(props: uiProps) => props.display || 'block'};
  font-weight:bold;

  &:focus {
    outline: none;
  }
`

export const Content = styled.div`
  width: ${(props: uiProps) => props.width || '100%'};
  height: auto;
  padding: 16px;
  border-radius: 16px;
  background-color: ${(props: uiProps) => props.background || '#cccccc'};

  &:hover {
    button {
      display: ${(props: uiProps) => props.display || 'block'};
    }
  }
`
export const Range = styled.input`
    width:100%;

`
