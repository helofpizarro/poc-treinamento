import React, {useState} from 'react'


const Text = () => {
  const [text, setText] = useState('')
  const [area, setArea] = useState('')
  const [textFind, setTextFind] = useState('')

  const handleClick = () => {
    // const texto =  area.split(' ').find(item => item === text)
    const texto = area.includes(text)
     setTextFind(texto ? 'existe' : 'não existe')

  }

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2>{textFind}</h2>
            <input type='text' placeholder='digite seu texto aqui' onChange={(event) => setText(event.target.value)}/>
            <div>
              <textarea onChange={(event) => setArea(event.target.value)}/>
              <div>
                <button onClick={() => handleClick()}>Localizar o texto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)
}

export default Text
