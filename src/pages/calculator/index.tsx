import React, {useState, useEffect} from 'react'

import { Section, Calc } from './style'



const Calculator = () => {
    const [ number, setNumber] = useState<string[]>([])
    const [ val1, setVal1] = useState(0)
    const [ val2, setVal2] = useState(0)
    const [result, setResult] = useState(0)
    const [ clean, setClean] = useState(false)


    const handleNumber = (num: string) => {
        if(clean){
            setNumber([])
            
        } else {
            setNumber([...number, num])
        }
    }

    const handleAmount = () =>{
        setClean(true)
       if(val1 === 0){
          setVal1(parseInt(number.join(',').replace(',', '')))
          
       } else if(val2 === 0){
          setVal2(parseInt(number.join(',').replace(',', ''))) 
        
        } else {
            setResult(val1 + val2)
            
        }
    }
   
    const handleClick = () => {
        if(val2 !== 0){
            setNumber([`${val1 + val2}`]) 

        } else {
            setNumber([`${val1 + parseInt(number.join(',').replace(',', '' ))}`])
        }
    }
    

    return (
       <Section>
           <div className='container'>
               <div className='row'>
                   <div className='col-12'>
                      <Calc>
                        <input type='text' readOnly  value={number.join(',').replace(',', '' )} />
                        <div className='d-flex'>
                        <div className='buttons-content'>
                            <button className='button'>AC</button>
                            <button className='button' >+/-</button>
                            <button className='button'>%</button>
                            <button className='button' onClick={() =>  handleNumber('1')}>1</button>
                            <button className='button'  onClick={() =>  handleNumber( '2')}>2</button>
                            <button className='button'  onClick={() =>  handleNumber( '3')}>3</button>
                            <button className='button'  onClick={() =>  handleNumber('4')}>4</button>
                            <button className='button'  onClick={() =>  handleNumber( '5')}>5</button>
                            <button className='button'  onClick={() =>  handleNumber( '6')}>6</button>
                            <button className='button'  onClick={() =>  handleNumber( '7')}>7</button>
                            <button className='button'  onClick={() =>  handleNumber('8')}>8</button>
                            <button className='button'  onClick={() =>  handleNumber('9')}>9</button>
                            <button className='button'  onClick={() =>  handleNumber('0')}>0</button>
                            <button className='button'  onClick={() =>  handleNumber( ',')}>,</button>
                        </div>
                        <div className='button-content'>
                           <button className='button-operator'>/</button>
                           <button className='button-operator'>x</button>
                           <button className='button-operator'>-</button>
                           <button className='button-operator' onClick={() => handleAmount()}>+</button>
                           <button className='button-operator' onClick={() => handleClick()}>=</button>
                        </div>
                        </div>
                    </Calc>  
                   </div>
               </div>
           </div>
       </Section> 
    )
}

export default Calculator