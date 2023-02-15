import styled from 'styled-components'

export const Border = styled.div`
  width: 900px;
  border: 1px solid #000;
  border-radius: 8px;
`

export const Table = styled.table`
  width: 100%;

  thead {

    th {
      padding: 8px 16px;
      font-size: 32px;
      font-weight: bold;
    }
  }


  tbody {
    tr {
      background-color: #00ced1;

      &:nth-child(2n) {
        background-color: #e3f7f7;
      }

      td {
        padding: 8px 16px;
      }
    }
  }
`

export const Form = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  position: fixed;
  bottom: 48px;
  flex-direction:column;

  label {
    font-size: 12px;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 48px;
    border: 1px solid  #00ced1;
    padding: 0 8px;
    border-radius: 8px;

    &:focus {
      outline: none;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 8px;
  background-color:  #00ced1;
  &:focus {
    outline: none;
  }
`
