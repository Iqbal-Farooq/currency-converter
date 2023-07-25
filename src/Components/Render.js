import React from 'react'
import './render.css'

const Render = ({code,country}) => {
  return (

    <div className='container'>
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