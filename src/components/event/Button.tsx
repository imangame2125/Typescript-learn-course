import React from 'react'
import { ButtonProps } from '../types/ButtonProps'

const Button = ({handleClick}:ButtonProps) => {
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        
    </div>
  )
}

export default Button