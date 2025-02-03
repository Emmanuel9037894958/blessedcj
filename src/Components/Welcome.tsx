// import React from 'react'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
        <div>
            <h1 className='text-4xl ml-9'>Please wait amoment....</h1>
           <Link to='/'>
           <button className='btn bg-green-600 mt-8 ml-9 animate-bounce text-white hover:text-red-600'>GO BACK</button></Link>
        </div>
    </div>
  )
}

export default Welcome ;