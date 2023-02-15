import styled from 'styled-components'

export const Section = styled.section`
  background: #F0F8FF;
`
export const Card = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 1px 2px 10px #ccc;
  padding: 16px;
  margin-top: 16px;
  text-align: center;
  background: #fff;

  .image-content {
    width: 100%;
    height: auto;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
  }

  .price {
    font-size: 40px;
    line-height: 50px;
    color: #00bfff;
    font-weight: bold;
  }

  .description {
    font-size: 14px;
    line-height: 17px;
    font-weight: 300;
    margin-top: 16px;
  }

`
export const ButtonAdd = styled.button`
  width: 100%;
  height: 25px;
  border-radius: 8px;
  background: #00BFFF;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 16px;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.9;
  }

`
export const CartContent = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #00bfff;
  border-radius: 16px;
  background: #fff;
  position: sticky;
  top: 16px;

  .cart-title {
    width: 100%;
    display: flex;
    border-radius: 16px 16px 0 0;
    height: 40px;
    color: #fff;
    background: #00bfff;
    font-weight: bold;
    align-items: center;
    justify-content: center;  
    padding: 0;
  }

  .content {
    position: relative;
    height: calc(500px - 130px);
    overflow-y: auto;

  }
`
export const CardIntem = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #00bfff;
  padding: 8px;

  .image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }

  .title {
    font-size: 14px;
    line-height: 17px;
    display: block;
    margin-bottom: 8px;
  }

  .price {
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
    display: block;
    color: #00bfff;
  }

  .qtd {
    font-size: 10px;
    line-height: 12px;
    color: #ccc;
    display: block;
    font-weight: bold;
    text-align: center;
    margin-bottom: 6px;
  }

  .button-qtd {
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
    background: none;
    border: none;
    color: #00bfff;

    &:focus {
      outline: none;
    }
  }

  .number-qtd {
    color: #ccc;
    font-size: 12px;
    line-height: 14px;
  }
  &:hover {
    opacity: 0.9;
  }
`
export const ButtonBay = styled.button`
  width: 100%;
  height: 48px;
  color: #fff;
  background: #00bfff;
  border: none;
  border-radius: 8px;
  
  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.9;
  }

`
export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 16px;

  &:focus {
    outline: none;
  }
`
export const Select = styled.select`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 0 16px;
  
  &:focus {
    outline: none;
  }
`