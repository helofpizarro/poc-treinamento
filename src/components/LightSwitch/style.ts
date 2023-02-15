import styled from 'styled-components'


type ButtonProps = {
  isAlight: boolean;
}

export const Button = styled.button`
  width: 116px;
  height: 48px;
  border-radius: 24px;
  border: none;
  position: relative;
  padding: 4;
  display: flex;
  align-items: center;
  justify-content: ${(props: ButtonProps) => props.isAlight ? 'start' : 'end'};
  background: ${(props: ButtonProps) => props.isAlight ?  '#000' : '#fff'};
  border: 1px solid #000;
  color: ${(props: ButtonProps) => props.isAlight ? '#fff' : '#000'};

  &:focus {
    outline: none;
  }

  &:after {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    content: '';
    display: block;
    background:  ${(props: ButtonProps) => props.isAlight ? '#fff' : '#000'};
    position: absolute;
    top: 4px;
    transition: all 0.5s;
    ${(props: ButtonProps) => props.isAlight ? `
      right: 4px;    
      ` : `
      left: 4px;
    `}
  }
`