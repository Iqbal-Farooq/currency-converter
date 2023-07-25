import React from 'react'
import './render.css'

const Render = ({k,code,country}) => {
  return (
    

    <div className='container' key={k}>
        <div className='countries_info'>
        <div className='symbol'>
        {code}

        </div>
         <div className='country'>
         {country}
            
        </div>

        </div>
    </div>
  )
}

export default Render