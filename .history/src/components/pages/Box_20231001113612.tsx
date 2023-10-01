import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Box = () => {

  const theme = useContext(ThemeContext)
  return (
    <div style={{background:theme.primary}}>Theme Box</div>
  )
}

export default Box