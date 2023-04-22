import React from 'react'
import { details } from '../components/Main';
import { useContext } from 'react';
const Success = () => {
const displayDetail=useContext(details)
  return (
    <div>
        {console.log(displayDetail.currentValue)}
        
    </div>
    
  )
}

export default Success