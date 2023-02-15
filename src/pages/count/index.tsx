import React, {useState} from 'react'


const Count = () => {
	const [count, setCount] = useState(0)

  return (
    <section  className='py-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<button onClick={() => setCount(count + 1)}> + </button>
						<h2>{count}</h2>
						<button onClick={() => setCount(count - 1)} disabled={count === 0}> - </button>	
					</div>
				</div>
			</div>
    </section> 
    )
}

export default Count