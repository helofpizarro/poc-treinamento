import styled from "styled-components"

type PriceProps = {
  up: boolean
}

export const Section = styled.section``
export const Label = styled.label`
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
  color: #cccccc;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 0 16px;
  background: #fff;

  &:focus {
    outline: none;
  }
`
export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  color: #fff;

  &:hover {
    opacity: .7;
  }

  &.up {
    background: #008000;
  }

  &.down {
    background: #ff0000;
  }
`
export const FinanceItems = styled.div`
  width: 100%;
  min-height: 123px;
  margin-bottom: 30px;
  border-radius: 8px;
  padding: 16px;

  .btns {
    display: none;
    cursor: pointer;
  }

  &:hover {
    box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
    .btns {
      display: flex;
    }
  }
`
export const Text = styled.h3`
  font-size: 18px;
`
export const Price = styled.h4`
  font-size: 20px;
  color: ${(props: PriceProps) => props.up ? '#008000' : '#ff0000'};

  span {
    color: #ccc;
    font-weight: #161616;
  }
`
export const ButtonDelete = styled.button`
  width: 80px;
  height: 28px;
  border: none;
  border-radius: 8px;
  background-color: #ff6961;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
`
export const ButtonEdit = styled.button`
  width: 80px;
  height: 28px;
  border: none;
  border-radius: 8px;
  background-color: #ffdb58;
  color: #fff;
  font-weight: bold;
  margin-right: 20px;
  font-size: 12px;
`
export const Select = styled.select`
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 0 16px;
  background: #fff;
`
