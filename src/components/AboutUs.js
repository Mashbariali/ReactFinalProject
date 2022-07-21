import React from 'react'
import './Style.css'
import Spinner from 'react-bootstrap/Spinner';


export default function AboutUs() {
  return (
    <div>
        
         <Spinner className='Spinner' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

    </div>
  )
}
