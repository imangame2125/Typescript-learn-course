import React, { useContext } from 'react'

const Box = () => {

  const theme = useContext(ThemeContext)
  return (
    <div>Theme Box</div>
  )
}

export default Box