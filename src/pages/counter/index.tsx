import React, {useState} from 'react'

import { Container } from './styled'

const Counter = () => {
  const [number, setNumber] = useState<number>(0)

  return (
    <Container>
      <h3 className='title'>{number}</h3>
      <div className='d-flex'>
        <button className='less' type='button' onClick={() => setNumber(number - 1)} disabled={number <= 0 ? true : false}>
          -
        </button>
        <button  className='more' type='button' onClick={() => setNumber(number + 1)} disabled={number >= 10 ? true : false}>
          +
        </button>
      </div>
    </Container>
  )
}

export default Counter