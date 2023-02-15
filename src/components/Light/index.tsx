import React, { useState } from 'react'

import acesa from 'src/assets/images/lampada-acesa.jpeg'
import apagada from 'src/assets/images/lampada-apagada.jpeg'
import quebrada from 'src/assets/images/lampada-quebrada.jpeg'

type LightProps = {
  alight: boolean
}

const Light = ({ alight }: LightProps) => {
  const [ breaking, setBreaking ] = useState(false)

  const handleClick = () => {
    
  }
  return (
    <>
    {
      breaking  ? (
        <img
          src={quebrada}
          
        />
        
        ) : (
          <img
            src={alight ? acesa : apagada} 
            alt={`uma lampada ${alight ? 'acesa' : 'apagada'}`}
            onClick={() => setBreaking(true)}
          />
          
      )
    }
    </>
  )
}

export default Light
