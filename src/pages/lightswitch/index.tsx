import React, {useState} from 'react'

import Light from 'src/components/Light'
import LightSwitch from 'src/components/LightSwitch'

import { Section } from './style'

const LightSwitchPage = () => {
  const [alight, setAlight] = useState<boolean>(false)

  return (
    <Section>
      <Light alight={alight} />
      <LightSwitch alight={alight} setAlight={setAlight} />
    </Section>
  )
}

export default LightSwitchPage