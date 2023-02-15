import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 50px;
    line-height: 60px;
  }

  .less, .more {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 0.9;
    }

  }
  .less {
    background: #ff0000;
    margin-right: 10px;
  }

  .more {
    background: #008000;
    margin-left: 10px;
  }

  button[disabled]{
     background: #cccc;
  }
`
