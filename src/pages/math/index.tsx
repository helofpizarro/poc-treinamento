import React, {useState} from 'react'

const Math = () => {
	const [soma, setSoma] = useState(0)
	const [number, setNumber] = useState(0)
	const [result, setResult] = useState(0)

    return (
			<section className='py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='d-flex'>
							<input 
								type='text' 
								placeholder='digite um numero' 
								onChange={(event) => setSoma(parseInt(event.target.value))}/>
							<h2 className='mx-3'> + </h2> 
							<input 
								type='text' 
								placeholder='digite um numero' 
								onChange={(event) => setNumber(parseInt(event.target.value))}/>
							<h2 className='mx-3'> = </h2> 
							<input type='text' placeholder='resultado' readOnly value={result}/>
							<button onClick={() => setResult(soma + number)}>Resultado</button>
							</div>
						</div>
					</div>
				</div>	
			</section> 
    )
}


export default Math