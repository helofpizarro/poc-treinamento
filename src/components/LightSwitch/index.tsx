import React from 'react'

import { Button } from './style'

type LightSwitchProps = {
  alight: boolean
  setAlight: Function
}

const LightSwitch = ({ alight, setAlight }: LightSwitchProps) => {
  return (
    <Button 
      isAlight={alight} 
      type='button' 
      onClick={() => setAlight(!alight)}
    >
      { alight ? 'Apagar' : 'Acender' }
    </Button>
  )
}

export default LightSwitch
