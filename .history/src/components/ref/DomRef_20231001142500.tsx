import React, { useRef } from 'react'

const DomRef = () => {
    const inputRef = useRef(null)
  return (
    <div>
        <input type='text'/>
    </div>
  )
}

export default DomRef